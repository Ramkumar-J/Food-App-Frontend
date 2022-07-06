import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="d-flex flex-column flex-shrink sidebar">
                <ul className="navbar-nav ms-2 fs-5 text-dark">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home"><i class="bi bi-house-door-fill"></i><span className="ms-2">Home</span></Link>
                    </li>
                    <hr className="mt-0 mb-0"></hr>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart"><i class="bi bi-cart-plus-fill"></i><span className="ms-2">Cart</span></Link>
                    </li>
                    <hr className="mt-0 mb-0"></hr>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="bi bi-heart-fill"></i><span className="ms-2">Wishlist</span></a>
                    </li>
                    <hr className="mt-0 mb-0"></hr>
                </ul>   
        </aside>
  )
}

export default Sidebar