import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FoodContext from "../Context/FoodContext";

function Navbar() {
  const { cartitems } = useContext(FoodContext);
  let navigate = useNavigate();
  let handleLogout = () => {
    window.localStorage.removeItem("foodapptoken");
    navigate("/login");
  };
  return (
    <header className="container-fluid bg-dark navbar-dimension">
      <nav className="container navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/home">
          San🍔Burg
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNav"
        >
          <span className="navbar-toggler-icon text-primary"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNav">
          <ul className="navbar-nav ms-auto text-dark">
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/home">
                <i class="bi bi-house-door-fill fs-5"></i>
                <span className="fs-4 ms-1">Home</span>
              </Link>
            </li>
            <hr className="mt-0 mb-0"></hr>
            <li className="nav-item ms-2">
              <Link className="nav-link position-relative" to="/cart">
                <i class="bi bi-cart-plus-fill fs-5"></i>
                <span className="fs-4 ms-1">Cart</span>
                <span class="badge position-absolute top-2 start-25 translate-middle bg-danger p-2 rounded-circle mt-1 countcart">
                  {cartitems.length}
                </span>
              </Link>
            </li>
            <hr className="mt-0 mb-0"></hr>
            <li className="nav-item ms-2">
              <Link className="nav-link fs-4 position-relative" to="/wishlist">
                <i class="bi bi-heart-fill fs-5"></i>
                <span className="fs-4 ms-1">Wishlist</span>
              </Link>
            </li>
            <hr className="mt-0 mb-0"></hr>
            <li className="nav-item dropdown ms-2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="mynavDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-circle fs-4"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="mynavDropdown">
                <li>
                  <Link className="dropdown-item text-primary" to="/admin">
                    Admin
                  </Link>
                </li>
                <hr className="mt-0 mb-0"></hr>
                <li>
                  <button
                    className="dropdown-item text-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item ms-2">
                    <div className="btn-group">
                    <Link className="nav-link" to="/login"><button className="btn btn-success">Login</button></Link>
                    <Link className="nav-link ms-2" to="/register"><button className="btn btn-primary">Register</button></Link>
                    </div>
                    </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
