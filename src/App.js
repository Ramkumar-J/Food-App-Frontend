import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter,Routes,Route, useParams} from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Sidebar from './Sidebar';
import Cart from './Cart';
import FoodMenu from './FoodMenu';
import Register from './Register';
import Login from './Login';
import AddFoods from './AddFood';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ViewMenu from './ViewMenu';
import Wishlist from './Wishlist';
import Admin from './Admin';
import Editfood from './Editfood';


function App() {
  // let params=useParams();
  let[foodItems,setFoodItems]=useState([]);
  // let[foodmenu,setFoodmenu]=useState([]);
  let[cartitems,setNewcartitems]=useState([]);
  let[total,setTotal]=useState(0);
  let[wishList,setNewwishList]=useState([]);
  useEffect(() => {
      async function getFooditems(){
          try {
              let foods=await axios.get("http://localhost:3005/foodmenu");
              console.log(foods);
              setFoodItems(foods.data);
          } catch (error) {
              console.log("error");
          }
      }
      getFooditems();
  },[])
  // let params=useParams();
  //   let[foodmenu,setFoodmenu]=useState([]);
  //   useEffect(() => {
  //       async function getFooditem(){
  //           try {
  //               let foodsdata=await axios.get(`http://localhost:3005/foodmenu/${params.category}`);
  //               console.log(foodsdata);
  //               setFoodmenu(foodsdata.data);
  //           } catch (error) {
  //               console.log("error");
  //           }
  //       }
  //       getFooditem();
  //   },[])
//   useEffect(() => {
//     async function getFooditems(){
//         try {
//             let foodsdata=await axios.get(`http://localhost:3005/foodmenu/${params.category}`);
//             console.log(foodsdata);
//             setFoodmenu(foodsdata.data);
//         } catch (error) {
//             console.log("error");
//         }
//     }
//     getFooditems();
// },[])
let Addtocart=(item) => {
setNewcartitems([...cartitems,item]);
setTotal(total + parseInt(item.foodprice));
}

let RemoveFromCart=(item) => {
  let remove=cartitems.findIndex(obj => item._id===obj._id);
  cartitems.splice(remove,1);
  setNewcartitems([...cartitems]);
 setTotal(total - parseInt(item.foodprice));
}

let Addwishlist=(list) => {
  setNewwishList([...wishList,list]);
}

let Removewishlist=(list) => {
  let index=wishList.findIndex(obj => obj._id === list._id);
  wishList.splice(index,1);
  setNewwishList([...wishList])
}

  return (
    <BrowserRouter>
    <div className="App">
      <header className=''>
        <Navbar Addcartitems={cartitems}></Navbar>
        {/* <Sidebar></Sidebar> */}
      </header>
      {/* <Sidebar></Sidebar> */}
      <main className=''>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home Fooditems={foodItems} Addcart={Addtocart} Addwishlist={Addwishlist}/>}></Route>
        <Route path="/cart" element={<Cart Addcartitems={cartitems} Removecartitems={RemoveFromCart} Total={total}/>}></Route>
        <Route path="/foodmenu" element={<FoodMenu Fooditems={foodItems} Addcart={Addtocart}/>}></Route>
        {/* <Route path="/foodmenu/:category" element={<ViewMenu/>}></Route> */}
        {/* <Route path="/foodmenu/juice" element={<ViewMenu Addedcart={Addtocart}/>}></Route> */}
        <Route path="/addmenu" element={<AddFoods/>}></Route>
        <Route path="/wishlist" element={<Wishlist addwish={wishList} Removewishlist={Removewishlist}/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/editfood/:id" element={<Editfood/>}></Route>
      </Routes>
      </main>
      <footer></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
