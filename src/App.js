import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Sidebar from './Sidebar';
import Cart from './Cart';
import FoodCard from './FoodCard';
import Register from './Register';
import Login from './Login';
import AddFoods from './AddFood';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  let[foodItems,setFoodItems]=useState([]);
    let[cartitems,setNewcartitems]=useState([]);
    let[total,setTotal]=useState(0);
    useEffect(() => {
        async function getFooditems(){
            try {
                let foods=await axios.get("http://localhost:3005/burger");
                console.log(foods);
                setFoodItems(foods.data);
            } catch (error) {
                console.log("error");
            }
        }
        getFooditems();
    },[])
let Addtocart=(item) => {
  setNewcartitems([...cartitems,item]);
  setTotal(total + item.foodprice);
}

let RemoveFromCart=(item) => {
   let removeIndex=cartitems.findIndex((e) => (item.id === e.id));
   cartitems.splice(removeIndex,1);
   setNewcartitems([...cartitems]);
   setTotal(total - item.foodprice);
}
  return (
    <BrowserRouter>
    <div className="App">
      <header className=''>
        <Navbar></Navbar>
        {/* <Sidebar></Sidebar> */}
      </header>
      <main className=''>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart Addcartitems={cartitems} Removecartitems={RemoveFromCart} Total={total}/>}></Route>
        <Route path="/burgeritems" element={<FoodCard Fooditems={foodItems} Addcart={Addtocart}/>}></Route>
        <Route path="/burger" element={<AddFoods/>}></Route>
      </Routes>
      </main>
      <footer></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
