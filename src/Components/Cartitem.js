import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cartitem(props) {
  let handleremovecartToast = () => {
    toast.info("Food Removed From Cart", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <section class="card mb-3">
      <div class="row">
        <div class="col-5 col-sm-4 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
          <img
            src={props.addcartitem.foodimage}
            class="rounded-start cart-cartitem_image"
            alt="Food Image"
            height={180}
            width={150}
          />
        </div>
        <div class="col-7 col-sm-8 col-md-7 col-lg-8 col-xl-8 col-xxl-8">
          <div class="card-body">
            <h3 class="card-title fw-bold">{props.addcartitem.foodname}</h3>
            <p class="card-text fs-4 fw-bold">₹{props.addcartitem.foodprice}</p>
            <button
              class="btn btn-danger rounded-pill"
              onClick={() => {
                props.Removecartitems(props.addcartitem);
                handleremovecartToast();
              }}
            >
              Remove
            </button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cartitem;
