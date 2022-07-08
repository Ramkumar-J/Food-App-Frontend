import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function FoodCard(){
    let[foodItems,setFoodItems]=useState([]);
    let[cartitems,setNewcartitems]=useState([]);
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

    let AddtoCart=(items) => {
        setNewcartitems([...cartitems,items]);
    }
    return(
        <div class="container">
             <div class="row">
            {
                foodItems.map((fooditem) => {
                    return(       
                        <Card FoodItems={fooditem} AddCartitems={AddtoCart}></Card>    
            // <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3 cardsize">
            //    <h1 class="text-center mt-1 text-danger">{fooditem.foodname}</h1>
            //    <p class="text-center fs-3 text-white">₹{fooditem.foodprice}</p>
            //    <hr class="border-danger border border-1 mt-0 mb-0"/>
            //        <img class="img-fluid burgersize" src={fooditem.foodimage} alt={`${fooditem.foodname} Image`} />
            //        <p class="text-warning fs-1 mt-0 mb-1 text-center">{fooditem.foodinfo}</p>
            //        <button class="offset-3 col-6 offset-3 btn btn-primary fs-5 mb-3 card-btn" type="button">Order Now</button>
            // </div>
                     )
                })
            }
        </div>
           
        {/* <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3 cardsize">
               <h1 class="text-center mt-1 text-danger">Burger Sandwich</h1>
               <p class="text-center fs-3 text-white">₹250</p>
               <hr class="border-danger border border-1 mt-0 mb-0"/>
                   <img class="img-fluid burgersize" src="https://pngpress.com/wp-content/uploads/2020/08/uploads_burger_sandwich_burger_sandwich_PNG4135.png" alt=""/>
                   <p class="text-warning fs-1 mt-0 mb-1 text-center">It's Delicious</p>
                   <button class="offset-3 col-6 offset-3 btn btn-primary fs-5 mb-3 card-btn" type="button">Order Now</button>
            </div>
        </div> */}
        {/* <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3 cardsize">
               <h1 class="text-center mt-1 text-danger">Burger Sandwich</h1>
               <p class="text-center fs-3 text-white">₹250</p>
               <hr class="border-danger border border-1 mt-0 mb-0"/>
                   <img class="img-fluid burgersize" src="https://pngpress.com/wp-content/uploads/2020/08/uploads_burger_sandwich_burger_sandwich_PNG4135.png" alt=""/>
                   <p class="text-warning fs-1 mt-0 mb-1 text-center">It's Delicious</p>
                   <button class="offset-3 col-6 offset-3 btn btn-primary fs-5 mb-3 card-btn" type="button">Order Now</button>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3 cardsize">
               <h1 class="text-center mt-1 text-danger">Burger Sandwich</h1>
               <p class="text-center fs-3 text-white">₹250</p>
               <hr class="border-danger border border-1 mt-0 mb-0"/>
                   <img class="img-fluid burgersize" src="https://freepngimg.com/thumb/cheese/61288-king-whopper-hamburger-cheeseburger-veggie-burger-buffalo.png" alt=""/>
                   <p class="text-warning fs-1 mt-0 mb-1 text-center">It's Delicious</p>
                   <button class="offset-3 col-6 offset-3 btn btn-primary fs-5 mb-3 card-btn" type="button">Order Now</button>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3 cardsize">
               <h1 class="text-center mt-1 text-danger">Burger Sandwich</h1>
               <p class="text-center fs-3 text-white">₹250</p>
               <hr class="border-danger border border-1 mt-0 mb-0"/>
                   <img class="img-fluid burgersize" src="https://pngpress.com/wp-content/uploads/2020/08/uploads_burger_sandwich_burger_sandwich_PNG4135.png" alt=""/>
                   <p class="text-warning fs-1 mt-0 mb-1 text-center">It's Delicious</p>
                   <button class="offset-3 col-6 offset-3 btn btn-primary fs-5 mb-3 card-btn" type="button">Order Now</button>
            </div> */}
        
    </div>
    )
}

export default FoodCard;