import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cartitem from './Cartitem'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

function Cart(props) {
  let[count,setcount]=useState(1);
  let increment=() => {
    setcount(count+1);
  }
  let decrement=() => {
    setcount(count-1);
  }
let OrderToast=() => {
  return(
    <div>
      <img className='img-fluid w-25' src="https://st3.depositphotos.com/15870672/36104/v/380/depositphotos_361046324-stock-illustration-cartoon-character-food-delivery-man.jpg?forcejpeg=true"></img><span className='text-secondary ms-0'>Order Placed Successfully</span>
    </div>
  )
}
  let handleToast=() => {
    toast.success(<OrderToast></OrderToast>,{position:toast.POSITION.TOP_RIGHT});
  }
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-sm-12 col-md-6 col-lg-6'>
        <h3 className="m-0 p-0">Cart Items({props.Addcartitems.length})</h3>
        {
          props.Addcartitems.length > 0 ? props.Addcartitems.map((addcartitem) => {
            return(
              <div class="card mb-3 cartitem-bg">
   <div class="row g-0">
     <div class="col-sm-4 col-md-4 col-lg-4">
      <img src={addcartitem.foodimage} class="img-fluid rounded-start" alt="..."/>
    </div>    
    <div class="col-sm-8 col-md-8 col-lg-8">     
    <div class="card-body">
      <h3 class="card-title fw-bold">{addcartitem.foodname}</h3>       
       <p class="card-text fs-4 fw-bold">₹{addcartitem.foodprice * count}</p>
        <button className='btn btn-secondary btn-sm fs-5 me-2' onClick={decrement}>-</button>
        <span className='ms-2'>{count}</span>
        <button className='btn btn-secondary btn-sm ms-3 fs-5 me-5' onClick={increment}>+</button>
        <button class="btn btn-primary bg-primary rounded-pill ms-5 position-absolute top-1" onClick={() => {props.Removecartitems(addcartitem)}}>Remove</button>
      </div>
    </div>
  </div>
</div>
            )
          }) : <h1 className='mt-2 text-info fw-bold'>No Items in Cart</h1>
        }
        {/* {
          props.Addcartitems.map((addcartitem) => {
            return(
              <div class="card mb-3 cartitem-bg" >
   <div class="row g-0">
     <div class="col-sm-4 col-md-4 col-lg-4">
      <img src={addcartitem.foodimage} class="img-fluid rounded-start" alt="..."/>
    </div>    
    <div class="col-sm-8 col-md-8 col-lg-8">     
    <div class="card-body">
      <h3 class="card-title fw-bold">{addcartitem.foodname}</h3>       
       <p class="card-text fs-4 fw-bold">₹{addcartitem.foodprice}</p>
        <button className='btn btn-secondary btn-sm fs-5 me-2'>-</button>
        <span className='ms-2'>1</span>
        <button className='btn btn-secondary btn-sm ms-3 fs-5 me-5'>+</button>
        <button class="btn btn-primary bg-primary rounded-pill ms-5 position-absolute top-1" onClick={() => {props.Removecartitems(addcartitem)}}>Remove</button>
      </div>
    </div>
  </div>
</div>
            )
          })
        } */}
        {/* <div class="card mb-3 cartitem-bg" >
   <div class="row g-0">
     <div class="col-sm-4 col-md-4 col-lg-4">
      <img src="https://pngpress.com/wp-content/uploads/2020/08/uploads_burger_sandwich_burger_sandwich_PNG4135.png" class="img-fluid rounded-start" alt="..."/>
    </div>    <div class="col-sm-8 col-md-8 col-lg-8">     <div class="card-body">
      <h3 class="card-title fw-bold">Big Burger</h3>       
       <p class="card-text fs-4 fw-bold">₹300</p>
        <button className='btn btn-secondary btn-sm fs-5 me-2'>-</button>
        <span className='ms-2'>1</span>
        <button className='btn btn-secondary btn-sm ms-3 fs-5 me-5'>+</button>
        <button class="btn btn-primary bg-primary rounded-pill ms-5 position-absolute top-1">Remove</button>
      </div>
    </div>
  </div>
</div> */}
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6'>
          <div class="row">
            <div className='col-7 col-sm-7 col-md-7 col-lg-7'>
              <p className='fs-5'>Item Total</p>
              <p className='fs-5'>Deliver Charges</p>
              <p className='fs-5'>Taxes</p>
              <hr></hr>
              <p className='fs-4 fw-bold'>Grand Total</p>
            </div>
            <div className='col-5 col-sm-5 col-md-5 col-lg-5'>
              <p className='fs-5'>₹{props.Total}</p>
              <p className='fs-5'>₹22.00</p>
              <p className='fs-5'>₹13.00</p>
              <hr></hr>
              <p className='fs-4 fw-bold'>₹{props.Total+22.00+13.00}</p>
            </div>
          </div>
          <div class="row">
            <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
               {/* <button className='btn btn-success' onClick={handleToast}>Place Order</button>
               <ToastContainer /> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Check out
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Delivery Information</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          {/* <label>Name</label>
       <input className='form-control' type={"text"}></input> */}
       <label>Mobile Number</label>
       <input className='form-control' type={"number"}></input>
       {/* <label>Email</label>
       <input className='form-control' type={"email"}></input> */}
       <label>Delivery Address</label>
       <textarea className='form-control' type={"text"}></textarea>
       <label>Paymant method</label><br></br>
       <input type="radio" id="cash" name="payment"/>
  <label for="cash">Cash on Delivery</label><br/>
  <input type="radio" id="card" name="payment"/>
  <label for="card">Card</label><br/>
  <input className='form-control mt-2' type={"number"} placeholder="Card number"></input>
       </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <input type={"submit"} class="btn btn-success" value="Place Order" onClick={handleToast}></input>
        <ToastContainer />
      </div>
    </div>
  </div>
</div>

            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;