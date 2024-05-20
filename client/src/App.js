import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" exact Component={Register} />
          <Route path="/login" exact Component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
