import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import Cart from './Routes/Cart';
import FoodMenu from './FoodMenu';
import Register from './Routes/Register';
import Login from './Routes/Login';
import AddFoods from './Components/AddFood';
import { useContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Wishlist from './Routes/Wishlist';
import Admin from './Routes/Admin';
// import Editfood from './Components/Editfood';
import Footer from './Components/Footer';
import Card from './Card';
import EditFoodinfo from './Components/EditFoodinfo';
import ViewMenu from './ViewMenu';
import { FooddataProvider } from './Context/FoodContext';


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

const cartList=JSON.parse(window.localStorage.getItem("cart") || "")

const cartitemTotal=JSON.parse(window.localStorage.getItem("cartTotal") || 0)

const WishlitData=JSON.parse(localStorage.getItem("wish") || "[]")

function App() {
  // let[foodItems,setFoodItems]=useState([]);
  // let[cartitems,setNewcartitems]=useState([]);
  // let[total,setTotal]=useState(0);
  let[wishList,setNewwishList]=useState(WishlitData);
  // useEffect(() => {
  //     async function getFooditems(){
  //         try {
  //             let foods=await axios.get("http://localhost:3005/foodmenu",{
  //               headers:{
  //                 Authorization:window.localStorage.getItem("foodapptoken"),
  //         },
  //             });
  //             console.log(foods);
  //             setFoodItems(foods.data);
  //         } catch (error) {
  //             alert("Something went wrong")
  //         }
  //     }
  //     getFooditems();
  // },[])
  let[state,dispatch]=useReducer(reducer,{cartitems:cartList,total:cartitemTotal})
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
// useEffect(() => {
//   if(window.localStorage.getItem("myKey")) {
//     setNewwishList(JSON.parse(window.localStorage.getItem("myKey")))
//   }
// }, []);

// useEffect(() => {
//   window.localStorage.setItem("myKey", JSON.stringify(wishList));
// }, [wishList]);
// useEffect(() => {
//   let wishdata=localStorage.getItem("wishkey");
//   if(wishdata){
//     setNewwishList(JSON.parse(wishdata));
//   }
// },[])

useEffect(() => {
  window.localStorage.setItem("cart",JSON.stringify(state.cartitems))
},[state.cartitems]);

useEffect(() => {
  window.localStorage.setItem("cartTotal",state.total)
},[state.total]);

useEffect(() => {
  localStorage.setItem("wish", JSON.stringify(wishList))
},[wishList]);

  return (
    // <MenuContext.Provider value={{foodItems,setFoodItems}}>
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      {/* <FooddataProvider> */}
      <header className='container-fluid bg-dark'>
        <Navbar Addcartitems={state.cartitems}></Navbar>
      </header>
      <main className=''> 
      <Routes>
        {/* <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route> */}
        <Route path="/home" element={<Home  Addcart={Addtocart} Addwishlist={Addwishlist} addwish={wishList}/>}></Route>
        <Route path="/cart" element={<Cart Addcartitems={state.cartitems} Removecartitems={RemoveFromCart} Total={state.total}/>}></Route>
        <Route path="/foodmenu" element={<FoodMenu  />}></Route>
        <Route path="/addmenu" element={<AddFoods/>}></Route>
        <Route path="/wishlist" element={<Wishlist addwish={wishList} Addcart={Addtocart} Removewishlist={Removewishlist}/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        {/* <Route path="/card" element={<Card Addcart={Addtocart} Addwishlist={Addwishlist} addwish={wishList}/>}></Route> */}
        <Route path="/editfood/:id" element={<EditFoodinfo/>}></Route>
        <Route path="/foodmenu/:category" element={<ViewMenu/>}></Route>
        {/* <Route path="/editfood/:id" element={<Editfood/>}></Route> */}
      </Routes>
      </main>
      {/* <hr></hr> */}
      <footer>
        <Footer></Footer>
      </footer>
      {/* </FooddataProvider> */}
    </div>
    </BrowserRouter>
    // </MenuContext.Provider>
  );
}

export default App;
