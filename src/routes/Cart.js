import React, { useContext, useState } from "react";
import Cartinfo from "../Components/Cartinfo";
import CheckoutForm from "../Components/CheckoutForm";
import Cartitem from "../Components/Cartitem";
import FoodContext from "../Context/FoodContext";

function Cart() {
  const { cartitems, setNewcartitems, total, setTotal } =
    useContext(FoodContext);
  let RemoveFromCart = (item) => {
    let remove = cartitems.findIndex((obj) => item._id === obj._id);
    cartitems.splice(remove, 1);
    setNewcartitems([...cartitems]);
    setTotal(total - parseInt(item.foodprice));
  };

  // let [count, setcount] = useState(1);
  // let handleincrement = (id) => {
  //     setcount(count + 1);

  // };
  // let handledecrement = (id) => {
  //     setcount(count - 1);
  // };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h2 className="text-info">Cart Items({cartitems.length})</h2>
          {cartitems.length > 0 ? (
            cartitems.map((addcartitem) => {
              return (
                <Cartitem
                  addcartitem={addcartitem}
                  Removecartitems={RemoveFromCart}
                  // handleincrement={handleincrement}
                  // handledecrement={handledecrement}
                  // count={count}
                ></Cartitem>
              );
            })
          ) : (
            <h1 className="mt-2 text-info fw-bold">No Items in Cart</h1>
          )}
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h2 className="text-info">Cart Total</h2>
          <div class="row">
            <div className="col-7 col-sm-7 col-md-7 col-lg-7">
              <p className="fs-5">Item Total</p>
              <p className="fs-5">Deliver Charges</p>
              <p className="fs-5">Taxes</p>
              <hr></hr>
              <p className="fs-4 fw-bold">Grand Total</p>
            </div>
            <div className="col-5 col-sm-5 col-md-5 col-lg-5">
              <p className="fs-5">₹{total}</p>
              <p className="fs-5">₹22.00</p>
              <p className="fs-5">₹13.00</p>
              <hr></hr>
              <p className="fs-4 fw-bold">₹{total + 22.0 + 13.0}</p>
            </div>
          </div>
          <div class="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <button
                type="button"
                class="btn btn-primary w-100"
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
