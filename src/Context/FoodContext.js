import React, { Children } from "react";
import { useEffect, useReducer, useState } from 'react';

const FoodContext=React.createContext({});
const FooddataProvider=({Children}) => {
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
    return(
<FoodContext.Provider 
>{Children}</FoodContext.Provider>
    )
} 

export {FooddataProvider};
export default FoodContext;