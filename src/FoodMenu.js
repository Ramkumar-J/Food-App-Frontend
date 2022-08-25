import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
// import Cartitem from "./Cartitem";

function FoodMenu(props){
    // let[foodItems,setFoodItems]=useState([]);
    // let[cartitems,setNewcartitems]=useState([]);
    // useEffect(() => {
    //     async function getFooditems(){
    //         try {
    //             let foods=await axios.get("http://localhost:3005/burger");
    //             console.log(foods);
    //             setFoodItems(foods.data);
    //         } catch (error) {
    //             console.log("error");
    //         }
    //     }
    //     getFooditems();
    // },[])

    // let AddedToCart=(item) => {
    //     setNewcartitems([...cartitems,item]);
    // }
    // let RemoveToCart=(item) => {
    //     let remove=cartitems.findIndex(obj => item.id===obj.id);
    //     cartitems.splice(remove,1);
    //     setNewcartitems([...cartitems]);
    //     setTotal(Total - item.price);
    //   }
    return(
        <div class="container">
             <div class="row">
                {
                    props.Fooditems.map((food) => {
                        return(
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3 cardsize">
                            <h1 class="text-center mt-1 text-danger">{food.foodname}</h1>
                            <p class="text-center fs-3 text-white">₹{food.foodprice}</p>
                            <hr class="border-danger border border-1 mt-0 mb-0"/>
                                <img class="img-fluid burgersize" src={food.foodimage} alt="Image" />
                                <p class="text-warning fs-1 mt-0 mb-1 text-center">{food.foodinfo}</p>
                                <button class="offset-3 col-6 offset-3 btn btn-primary fs-5 mb-3 card-btn" onClick={() => {props.Addcart(food)}}>Order Now</button>
                         </div>
                        )
                    })
                }
             {/* <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3 cardsize">
               <h1 class="text-center mt-1 text-danger">Big Burger</h1>
               <p class="text-center fs-3 text-white">₹300</p>
               <hr class="border-danger border border-1 mt-0 mb-0"/>
                   <img class="img-fluid burgersize" src="https://pngpress.com/wp-content/uploads/2020/08/uploads_burger_sandwich_burger_sandwich_PNG4135.png" alt="Image" />
                   <p class="text-warning fs-1 mt-0 mb-1 text-center">It's Delicious</p>
                   <button class="offset-3 col-6 offset-3 btn btn-primary fs-5 mb-3 card-btn">Order Now</button>
            </div> */}
           
                {/* <div className="col-lg-12">
            {
                foodItems.map((data) => {
                    return(       
                        <Card FoodItems={data} Addcart={AddedToCart} cartItems={cartitems}></Card>    
                     )
                })
            }
            </div> */}
            {/* <div className="col-lg-4">
            <h1 className="m-0 p-0">Cart Items({cartitems.length})</h1>
            {
            cartitems.map((cartdata) => {
                return <Cartitem Cartitems={cartdata} Removecart={RemoveToCart}></Cartitem>
            })
          }
            </div> */}
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

export default FoodMenu;