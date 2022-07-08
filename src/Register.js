import React from "react";
import { Link } from "react-router-dom";

function Register(){
    return(
        <div className="container register-container">
            <div className="row border border-2 register">
                <div className="col-lg-12">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-fluid logo-image" src="https://img.icons8.com/color/70/hamburger.png"></img>
                    </div>
            </div>
                    <div className="row mt-0 mb-0">
                <div className="col-lg-12">
                    <h1 className="text-center fw-bold">Register</h1>
                    </div>
            </div>
            <form>
                    <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="username">Username</label>
                    <input className="form-control" id="username" type={"text"}></input>
                    </div>
                    </div>
                    <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="email">Email</label>
                    <input className="form-control" id="email" type={"email"}></input>
                    </div>
                    </div>
                    <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="password">Password</label>
                    <input className="form-control" id="password" type={"password"}></input>
                    <p className="mt-2">You are already registered, <Link className="text-danger fs-5" to="/login">Login</Link></p>
                    </div>
                    </div>
                    <div className="row mt-3 mb-3">
                <div className="col-lg-12">
                    <input className="form-control btn btn-primary rounded-pill"  type={"submit"} value="Submit"></input>
                    </div>
                    </div>
                    </form>
                    </div>
                    </div>
        </div>
    )
}

export default Register;