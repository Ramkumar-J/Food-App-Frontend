import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Card(props) {
  let[foodItems,setFoodItems]=useState([]);
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
  return (
    <>
    {
      foodItems.map(food => {
        return(
        // <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-4 mt-3 p-0 ">
        <div class="card cardsize">
    <img src={food.foodimage} class="card-img-top bg-secondary burgersize" alt="Image"/>
    <hr class="border-danger border border-1 mt-0 mb-0"/>
    <div class="card-body">
      <h2 class="card-title text-center mt-0 text-danger">{food.foodname}</h2>
      <p class="card-text text-center fs-5 text-dark mb-0">₹{food.foodprice}</p>
      {/* <p class="card-text text-warning fs-1 mt-0 mb-1 text-center">{food.foodinfo}</p> */}
      <button class="offset-3 col-6  btn btn-primary btn-sm fs-5 mt-2 card-btn" onClick={() => {props.Addcart(food)}}>Order Now</button>
      <button className='btn btn-danger btn-sm rounded-circle wish' onClick={() =>props.Addwishlist(food)}  disabled={props.addwish.some(
                        (obj) => obj._id === food._id
                      )}>
      <i class="bi bi-heart-fill"></i>
      </button>
    </div>
  </div>
      // </div>
        )
      })
    }
    </>
//     <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-4 mt-3 p-0 ">
//       <div class="card cardsize">
//   <img src={props.food.foodimage} class="card-img-top bg-secondary burgersize" alt="Image"/>
//   <hr class="border-danger border border-1 mt-0 mb-0"/>
//   <div class="card-body">
//     <h2 class="card-title text-center mt-0 text-danger">{props.food.foodname}</h2>
//     <p class="card-text text-center fs-5 text-dark mb-0">₹{props.food.foodprice}</p>
//     {/* <p class="card-text text-warning fs-1 mt-0 mb-1 text-center">{food.foodinfo}</p> */}
//     <button class="offset-3 col-6  btn btn-primary btn-sm fs-5 mt-2 card-btn" onClick={() => {props.Addcart(props.food)}}>Order Now</button>
//     <button className='btn btn-danger btn-sm rounded-circle wish' onClick={() =>props.Addwishlist(props.food)}  disabled={props.addwish.some(
//                       (obj) => obj._id === props.food._id
//                     )}>
//     <i class="bi bi-heart-fill"></i>
//     </button>
//   </div>
// </div>
//     </div>
    // <div></div>
    // <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3 cardsize">
    //            <h1 class="text-center mt-1 text-danger">{props.FoodItems.foodname}</h1>
    //            <p class="text-center fs-3 text-white">₹{props.FoodItems.foodprice}</p>
    //            <hr class="border-danger border border-1 mt-0 mb-0"/>
    //                <img class="img-fluid burgersize" src={props.FoodItems.foodimage} alt="Image" />
    //                <p class="text-warning fs-1 mt-0 mb-1 text-center">{props.FoodItems.foodinfo}</p>
    //                <button class="offset-3 col-6 offset-3 btn btn-primary fs-5 mb-3 card-btn"  onClick={() => props.Addcart(props.FoodItems)}>Order Now</button>
    //         </div>
  )
}

export default Card;