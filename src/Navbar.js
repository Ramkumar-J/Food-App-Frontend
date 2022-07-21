import React from "react";
import { Link } from "react-router-dom";

function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <a className="navbar-brand fw-bold fs-2 ms-5 text-danger fst-italic" href="#">San🍔Burg</a>
            {/* <div className="collapse navbar-collapse"> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="myNav">
                    <div className="btn-group ms-auto">
                    <Link className="nav-link" to="/login"><button className="btn btn-success">Login</button></Link>
                    <Link className="nav-link" to="/register"><button className="btn btn-primary">Register</button></Link>
                    <a className="nav-link" href="#"><button className="btn btn-danger">Logout</button></a>
                    </div>
                </div>
                {/* <aside className="d-flex flex-column flex-shrink sidebar"> */}
                <ul className="navbar-nav ms-2 fs-5 text-dark">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home"><i class="bi bi-house-door-fill"></i><span className="ms-2">Home</span></Link>
                    </li>
                    <hr className="mt-0 mb-0"></hr>
                    <li className="nav-item">
                        <Link className="nav-link position-relative" to="/cart"><i class="bi bi-cart-plus-fill"></i><span  class="badge position-absolute top-2 start-100 translate-middle bg-danger p-2 rounded-circle countcart">{props.Addcartitems.length}</span></Link>
                       
                    </li>
                    <hr className="mt-0 mb-0"></hr>
                    <li className="nav-item">
                        <Link className="nav-link" to="/wishlist"><i class="bi bi-heart-fill"></i><span className="ms-2">Wishlist</span></Link>
                    </li>
                    <hr className="mt-0 mb-0"></hr>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin"><i class="bi bi-shield-lock-fill"></i><span className="ms-2">Admin</span></Link>
                    </li>
                </ul> 
                {/* </aside> */}
            {/* </div> */}
        </nav>
    )
}

export default Navbar;