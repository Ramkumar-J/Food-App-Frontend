import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddFoods from "./AddFood";
import FoodMenu from "./FoodMenu";

function Admin(){
    const[Food,setFood]=useState([]);
    useEffect(() => {
        async function getFooditems(){
            try {
                let foods=await axios.get("http://localhost:3005/foodmenu");
                console.log(foods);
                setFood(foods.data);
            } catch (error) {
                console.log("error");
            }
        }
        getFooditems();
    },[])

let deletefood=async(id) => {
    try {
        let ask = window.confirm(
            "Are you sure, do you want to delete this data?"
          );
          if (ask){
        await axios.delete(`http://localhost:3005/foodmenu/${id}`);
          }
    } catch (error) {
        console.log(error);
    }   
}
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center text-primary mt-3">Add New Foods</h1>
                <AddFoods></AddFoods>
                </div>
            </div>
            <div className="row">
                    {
                        Food.map((food) => {
                            return(
                                <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-4 mt-3 p-0 ">
                                <div class="card cardsize">
  <img src={food.foodimage} class="card-img-top burgersize" alt="Image"/>
  <hr class="border-danger border border-1 mt-0 mb-0"/>
  <div class="card-body">
    <h2 class="card-title text-center mt-0 text-secondary">{food.foodname}</h2>
    <p class="card-text text-center fs-5 text-dark mb-0">₹{food.foodprice}</p>
    <div className="foodmenu-icons d-flex justify-content-between">
    <Link to={`/editfood/${food._id}`}><i class="bi bi-pencil-square fs-4 text-info ms-3"></i></Link>
    <button className="btn btn-transparent" onClick={() => deletefood(food._id)}><i class="bi bi-trash3-fill fs-4 text-danger me-3"></i></button>
    </div>
    {/* <button class="offset-3 col-6  btn btn-primary btn-sm fs-5 mt-2 card-btn" onClick={() => {props.Addcart(food)}}>Order Now</button> */}
  </div>
</div>
</div>
                            )
                        })
                    }
                </div>
            
        </div>
    )
}

export default Admin;