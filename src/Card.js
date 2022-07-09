import React from 'react'

function Card(props) {
  return (
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3 cardsize">
               <h1 class="text-center mt-1 text-danger">{props.FoodItems.foodname}</h1>
               <p class="text-center fs-3 text-white">₹{props.FoodItems.foodprice}</p>
               <hr class="border-danger border border-1 mt-0 mb-0"/>
                   <img class="img-fluid burgersize" src={props.FoodItems.foodimage} alt="Image" />
                   <p class="text-warning fs-1 mt-0 mb-1 text-center">{props.FoodItems.foodinfo}</p>
                   <button class="offset-3 col-6 offset-3 btn btn-primary fs-5 mb-3 card-btn"  onClick={() => props.AddCartitems(props.FoodItems)}>Order Now</button>
            </div>
            
  )
}

export default Card;