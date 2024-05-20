const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/userModel");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/jwt-project");

const bcrypt = require("bcrypt");

app.post("/api/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", error: "Duplicate Email" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      return res.json({ status: "ok", user: true });
    } else {
      return res.json({
        status: "error",
        user: false,
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    console.error("Login error:", error.message);
    return res.json({
      status: "error",
      user: false,
      message: "An error occurred during login",
    });
  }
});

app.listen(5173, () => {
  console.log("Server started on port 5173");
});
