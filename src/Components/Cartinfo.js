import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";

function Cartinfo(props) {
  // let [cart, setcart] = useState(props.Addcartitems);
  let [count, setcount] = useState(0);
  let handleincrement = (id) => {
    props.Addcartitems.map((item) => id === item._id ? setcount(count + 1):count)
    // setcart(cart => 
    //   cart.map((item) => id === item.id ? (...item,setcount:item.count+1) : item)
    //   )
    // setcount(count + 1);
  };
  let handledecrement = (id) => {
    props.Addcartitems.map((item) => id === item._id ? setcount(count - 1):count)
    // setcount(count - 1);
  };
  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <h3 className="m-0 p-0">Cart Items({props.Addcartitems.length})</h3>
        {props.Addcartitems.length > 0 ? (
          props.Addcartitems.map((addcartitem) => {
            // <div class="card mb-3 cartitem-bg">
            {/* //   <div class="row g-0"> */}
            return (
              <div class="card mb-3 cartitem-bg">
              <div class="row g-0">
                <div class="col-sm-4 col-md-4 col-lg-4">
                  <img
                    src={addcartitem.foodimage}
                    class="img-fluid rounded-start cartImage"
                    alt="..."
                  />
                </div>
                <div class="col-sm-8 col-md-8 col-lg-8">
                  <div class="card-body">
                    <h3 class="card-title fw-bold">{addcartitem.foodname}</h3>
                    <p class="card-text fs-4 fw-bold">
                    {/* ₹{props.addcartitem.foodprice} */}
                      ₹{addcartitem.foodprice * count}
                    </p>
                    <button
                      className="btn btn-secondary btn-sm fs-5 me-2"
                      onClick={() => {handledecrement(addcartitem._id)}}
                    >
                      -
                    </button>
                    <span className="ms-2">{count}</span>
                    <button
                      className="btn btn-secondary btn-sm ms-3 fs-5 me-5"
                      onClick={() => {handleincrement(addcartitem._id)}}
                    >
                      +
                    </button>
                    <button
                      class="btn btn-danger rounded-pill position-absolute top-1"
                      onClick={() => {
                        props.Removecartitems(addcartitem);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            );
            
            
          })
        ) : (
          <h1 className="mt-2 text-info fw-bold">No Items in Cart</h1>
        )}
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div class="row">
          <div className="col-7 col-sm-7 col-md-7 col-lg-7">
            <p className="fs-5">Item Total</p>
            <p className="fs-5">Deliver Charges</p>
            <p className="fs-5">Taxes</p>
            <hr></hr>
            <p className="fs-4 fw-bold">Grand Total</p>
          </div>
          <div className="col-5 col-sm-5 col-md-5 col-lg-5">
            <p className="fs-5">₹{props.Total}</p>
            <p className="fs-5">₹22.00</p>
            <p className="fs-5">₹13.00</p>
            <hr></hr>
            <p className="fs-4 fw-bold">₹{props.Total + 22.0 + 13.0}</p>
          </div>
        </div>
        <div class="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Check out
            </button>
            <CheckoutForm></CheckoutForm>
          </div>
        </div>
      </div>
    </div>
  </div>
    // <div class="card mb-3 cartitem-bg">
    //   <div class="row g-0">
    //     <div class="col-sm-4 col-md-4 col-lg-4">
    //       <img
    //         src={props.addcartitem.foodimage}
    //         class="img-fluid rounded-start cartImage"
    //         alt="..."
    //       />
    //     </div>
    //     <div class="col-sm-8 col-md-8 col-lg-8">
    //       <div class="card-body">
    //         <h3 class="card-title fw-bold">{props.addcartitem.foodname}</h3>
    //         <p class="card-text fs-4 fw-bold">
    //         {/* ₹{props.addcartitem.foodprice} */}
    //           ₹{props.addcartitem.foodprice * count}
    //         </p>
    //         <button
    //           className="btn btn-secondary btn-sm fs-5 me-2"
    //           onClick={decrement}
    //         >
    //           -
    //         </button>
    //         <span className="ms-2">{count}</span>
    //         <button
    //           className="btn btn-secondary btn-sm ms-3 fs-5 me-5"
    //           onClick={increment}
    //         >
    //           +
    //         </button>
    //         <button
    //           class="btn btn-danger rounded-pill position-absolute top-1"
    //           onClick={() => {
    //             props.Removecartitems(props.addcartitem);
    //           }}
    //         >
    //           Remove
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Cartinfo;
