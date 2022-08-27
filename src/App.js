import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Cart from "./Routes/Cart";
import Register from "./Routes/Register";
import Login from "./Routes/Login";
import AddFoods from "./Components/AddFood";
import { useEffect, useState } from "react";
import Wishlist from "./Routes/Wishlist";
import Admin from "./Routes/Admin";
import Footer from "./Components/Footer";
import EditFoodinfo from "./Components/EditFoodinfo";
import FoodContext from "./Context/FoodContext";

function App() {
  const cartList = JSON.parse(
    window.localStorage.getItem("cart") || "[]"
    );
  const cartitemTotal = JSON.parse(
    window.localStorage.getItem("cartTotal") || 0
  );
  const WishlistData = JSON.parse(
    window.localStorage.getItem("wish") || "[]"
    );
  let [foodItems, setFoodItems] = useState([]);
  let [cartitems, setNewcartitems] = useState(cartList);
  let [total, setTotal] = useState(cartitemTotal);
  let [wishList, setNewwishList] = useState(WishlistData);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cartitems));
  }, [cartitems]);

  useEffect(() => {
    window.localStorage.setItem("cartTotal", total);
  }, [total]);

  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <FoodContext.Provider
      value={{
        foodItems,
        setFoodItems,
        cartitems,
        setNewcartitems,
        total,
        setTotal,
        wishList,
        setNewwishList,
      }}
    >
      {/* <BrowserRouter> */}
        <div className="App app-background">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/addmenu" element={<AddFoods />}></Route>
            <Route path="/editfood/:id" element={<EditFoodinfo />}></Route>
          </Routes>
           </BrowserRouter>
          <Footer></Footer>
        </div>
      {/* </BrowserRouter> */}
    </FoodContext.Provider>
  );
}

export default App;
