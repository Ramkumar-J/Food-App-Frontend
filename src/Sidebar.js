import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="d-flex flex-column flex-shrink sidebar">
                <ul className="navbar-nav fs-5 p-1 text-dark">
                    <li className="nav-item">
                        <Link className="nav-link side-icon" to="/home"><span className="ms-1">Home</span><i class="bi bi-house-door-fill"></i></Link>
                    </li>
                    <hr className="mt-0 mb-0"></hr>
                    <li className="nav-item">
                        <Link className="nav-link side-icon" to="/cart"><span className="ms-1">Cart</span><i class="bi bi-cart-plus-fill"></i></Link>
                    </li>
                    <hr className="mt-0 mb-0"></hr>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#"><i class="bi bi-heart-fill"></i><span className="">Wishlist</span></a>
                    </li>
                    <hr className="mt-0 mb-0"></hr> */}
                </ul>   
        </aside>
  )
}

export default Sidebar