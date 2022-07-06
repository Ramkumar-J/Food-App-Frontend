import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <a className="navbar-brand fw-bold fs-2 ms-5 text-danger fst-italic" href="#">San🍔Burg</a>
            {/* <div className="collapse navbar-collapse"> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="myNav">
                    <div className="btn-group ms-auto">
                    <a className="nav-link" href="#"><button className="btn btn-success">Login</button></a>
                    <a className="nav-link" href="#"><button className="btn btn-primary">Signup</button></a>
                    <a className="nav-link" href="#"><button className="btn btn-danger">Logout</button></a>
                    </div>
                </div>
            {/* </div> */}
        </nav>
    )
}

export default Navbar;