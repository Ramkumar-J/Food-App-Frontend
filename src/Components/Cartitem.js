import React, { useState } from 'react'

function Cartitem(props) {
  // let [count, setcount] = useState(1);
  // let handleincrement = (id) => {
  //   // props.Addcartitems.map(item => item._id !== id ? setcount(count + 1) : count )
  //     setcount(count + 1);
    
   
  // };
  // let handledecrement = (id) => {
  //     setcount(count - 1);
  // };
  return (
   <div class="card mb-3">
      <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-4">
          <img
            src={props.addcartitem.foodimage}
            class="img-fluid rounded-start cartImage"
            alt="..."
          />
        </div>
        <div class="col-sm-8 col-md-8 col-lg-8">
          <div class="card-body">
            <h3 class="card-title fw-bold">{props.addcartitem.foodname}</h3>
            <p class="card-text fs-4 fw-bold">
            ₹{props.addcartitem.foodprice}
              {/* ₹{props.addcartitem.foodprice * props.count} */}
              {/* ₹{props.addcartitem.foodprice * count} */}
            </p>
            {/* <button
              className="btn btn-secondary btn-sm fs-5 me-2"
              // onClick={() => {props.handledecrement(props.addcartitem._id)}}
              onClick={() => {handledecrement(props.addcartitem._id)}}
            >
              -
            </button> */}
            {/* <span className="ms-2">{props.count}</span> */}
            {/* <span className="ms-2">{count}</span> */}
            {/* <button
              className="btn btn-secondary btn-sm ms-3 fs-5 me-5"
              // onClick={() => {props.handleincrement(props.addcartitem._id)}}
              onClick={() => {handleincrement(props.addcartitem._id)}}
            >
              +
            </button> */}
            <button
              class="btn btn-danger rounded-pill position-absolute top-1"
              onClick={() => {
                props.Removecartitems(props.addcartitem);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem