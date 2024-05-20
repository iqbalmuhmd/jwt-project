import React, { useState } from "react";
import "./Login.css";

const Login = () => {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch("http://localhost:5173/api/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = response.json
    console.log(data);
  }
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={registerUser}>        
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
