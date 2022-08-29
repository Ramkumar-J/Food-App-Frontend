import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Routes/Login";
import Register from "./Routes/Register";


function LoginContainer(){
    return(
        <div className="container">
            {/* <BrowserRouter> */}
            <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />}></Route> */}
        </Routes>
        {/* </BrowserRouter> */}
      </div>
    )
}

export default LoginContainer;