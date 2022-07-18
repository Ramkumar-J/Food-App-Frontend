import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ViewMenu(props) {
    let params=useParams();
    let[foodmenu,setFoodmenu]=useState([]);
    useEffect(() => {
        async function getFooditem(){
            try {
                let foodsdata=await axios.get(`http://localhost:3005/foodmenu/${params.category}`);
                console.log(foodsdata);
                setFoodmenu(foodsdata.data);
            } catch (error) {
                console.log("error");
            }
        }
        getFooditem();
    },[])
  return (
    <div class="container">
    <div class="row">
       {
           foodmenu.map((menu) => {
               return(
                   <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3 cardsize">
                   <h1 class="text-center mt-1 text-danger">{menu.foodname}</h1>
                   <p class="text-center fs-3 text-white">₹{menu.foodprice}</p>
                   <hr class="border-danger border border-1 mt-0 mb-0"/>
                       <img class="img-fluid burgersize" src={menu.foodimage} alt="Image" />
                       <p class="text-warning fs-1 mt-0 mb-1 text-center">{menu.foodinfo}</p>
                       {/* <button class="offset-3 col-6 offset-3 btn btn-primary fs-5 mb-3 card-btn" onClick={() => {props.Addedcart(menu)}}>Order Now</button> */}
                </div>
               )
           })
       }
       </div>
       </div>
  )
}

export default ViewMenu