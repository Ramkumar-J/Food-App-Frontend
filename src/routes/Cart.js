import React from "react";
import Cartitem from "../Cartitem";
import CheckoutForm from "../CheckoutForm";

function Cart(props) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="m-0 p-0">Cart Items({props.Addcartitems.length})</h3>
          {props.Addcartitems.length > 0 ? (
            props.Addcartitems.map((addcartitem) => {
              return (
                <Cartitem
                  addcartitem={addcartitem}
                  Removecartitems={props.Removecartitems}
                ></Cartitem>
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
  );
}

export default Cart;
