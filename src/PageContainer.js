import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddFoods from './Components/AddFood'
import EditFoodinfo from './Components/EditFoodinfo'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Admin from './Routes/Admin'
import Cart from './Routes/Cart'
import Home from './Routes/Home'
import Wishlist from './Routes/Wishlist'

function PageContainer() {
  return (
 <div>
    <Navbar></Navbar>
    <div className=''>
        {/* <Navbar></Navbar> */}
        {/* <BrowserRouter> */}
        {/* <Navbar></Navbar> */}
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/addmenu" element={<AddFoods />}></Route>
            <Route path="/editfood/:id" element={<EditFoodinfo />}></Route>
            </Routes>
            {/* </BrowserRouter> */}
            <Footer></Footer>
    </div>
    </div>
  
  )
}

export default PageContainer;