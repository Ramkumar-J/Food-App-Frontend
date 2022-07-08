import React, { useState } from 'react'
import Cartitem from './Cartitem'

function Cart() {
  let[cartitems,setNewcartitems]=useState([]);
  let RemoveToCart=(item) => {
    let remove=cartitems.findIndex(obj => item.id===obj.id);
    cartitems.splice(remove,1);
    setNewcartitems([...cartitems]);
    // setTotal(Total - item.price);
  }
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-sm-12 col-md-6 col-lg-6'>
          {
            cartitems.map((cartitem) => {
              return(
                <Cartitem Cartitems={cartitem} Removecart={RemoveToCart}></Cartitem>
              )
            })
          }
        {/* <Cartitem></Cartitem> */}
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
              <p className='fs-5'>₹200.00</p>
              <p className='fs-5'>₹22.00</p>
              <p className='fs-5'>₹13.00</p>
              <hr></hr>
              <p className='fs-4 fw-bold'>₹235.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart