import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Navbar';
import Home from './routes/Home';
import Cart from './routes/Cart';
import FoodMenu from './FoodMenu';
import Register from './Register';
import Login from './Login';
import AddFoods from './AddFood';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Wishlist from './routes/Wishlist';
import Admin from './Admin';
import Editfood from './Editfood';
import Footer from './Footer';
import Card from './Card';

function reducer(state,action){
  console.log(action)
     switch (action.type) {
      
      case "Add_To_Cart":
        return{
        ...state,cartitems:[...state.cartitems,action.item],
    total:state.total + parseInt(action.item.foodprice)
        }
        
    case "Remove_From_Cart":
         let removeCartitem=state.cartitems.filter(obj => action.item._id !==obj._id);
      // state.cartitems.splice(remove,1);
      return{
        cartitems:[...removeCartitem],
    total:state.total - parseInt(action.item.foodprice)
        }
        // case "Add_To_Wishlist":
        //   return{
        //   ...state,wishList:[...state.wishList,action.list]
        //   }
  //     case "Remove_From_Wishlist":
  // //         let index=state.wishList.findIndex(obj => obj._id === action.list._id);
  // // state.wishList.splice(index,1);
  //          let updated=state.wishList.filter(obj => action.list._id !== obj._id);
  //          console.log(updated);
  //       // state.cartitems.splice(remove,1);
  //       return{
  //         wishList:[...updated]
  //         } 
     }
     return state;
}


function App() {
  
  let[foodItems,setFoodItems]=useState([]);
  // let[cartitems,setNewcartitems]=useState([]);
  // let[total,setTotal]=useState(0);
  let[wishList,setNewwishList]=useState([]);
  useEffect(() => {
      async function getFooditems(){
          try {
              let foods=await axios.get("http://localhost:3005/foodmenu",{
                headers:{
                  Authorization:window.localStorage.getItem("foodapptoken"),
          },
              });
              console.log(foods);
              setFoodItems(foods.data);
          } catch (error) {
              alert("Something went wrong")
          }
      }
      getFooditems();
  },[])
  let[state,dispatch]=useReducer(reducer,{cartitems:[],total:0})
  let Addtocart=(item) => {
   dispatch({type:"Add_To_Cart",item})
    // setNewcartitems([...cartitems,item]);
    // setTotal(total + parseInt(item.foodprice));
    }
    
    let RemoveFromCart=(item) => {
      dispatch({type:"Remove_From_Cart",item})
    //   let remove=cartitems.findIndex(obj => item._id===obj._id);
    //   cartitems.splice(remove,1);
    //   setNewcartitems([...cartitems]);
    //  setTotal(total - parseInt(item.foodprice));
    }
    
    // let Addwishlist=(list) => {
    //   dispatch({type:"Add_To_Wishlist",list})
    // }
    
    // let Removewishlist=(list) => {
    //   dispatch({type:"Remove_From_Wishlist",list})
    // }


// let Addtocart=(item) => {
// setNewcartitems([...cartitems,item]);
// setTotal(total + parseInt(item.foodprice));
// }

// let RemoveFromCart=(item) => {
//   let remove=cartitems.findIndex(obj => item._id===obj._id);
//   cartitems.splice(remove,1);
//   setNewcartitems([...cartitems]);
//  setTotal(total - parseInt(item.foodprice));
// }

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
        <Navbar Addcartitems={state.cartitems}></Navbar>
      </header>
      <main className=''> 
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home Fooditems={foodItems} Addcart={Addtocart} Addwishlist={Addwishlist} addwish={wishList}/>}></Route>
        <Route path="/cart" element={<Cart Addcartitems={state.cartitems} Removecartitems={RemoveFromCart} Total={state.total}/>}></Route>
        <Route path="/foodmenu" element={<FoodMenu Fooditems={foodItems} />}></Route>
        <Route path="/addmenu" element={<AddFoods/>}></Route>
        <Route path="/wishlist" element={<Wishlist addwish={wishList} Addcart={Addtocart} Removewishlist={Removewishlist}/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        {/* <Route path="/card" element={<Card Addcart={Addtocart} Addwishlist={Addwishlist} addwish={wishList}/>}></Route> */}
        <Route path="/editfood/:id" element={<Editfood/>}></Route>
      </Routes>
      </main>
      {/* <hr></hr> */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
