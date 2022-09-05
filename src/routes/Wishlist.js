import React, { useContext } from "react";
import FoodContext from "../Context/FoodContext";

function Wishlist() {
  const {
    cartitems,
    setNewcartitems,
    total,
    setTotal,
    wishList,
    setNewwishList,
  } = useContext(FoodContext);

  let Removewishlist = (list) => {
    let index = wishList.findIndex((obj) => obj._id === list._id);
    wishList.splice(index, 1);
    setNewwishList([...wishList]);
  };

  let Addtocart = (item) => {
    setNewcartitems([...cartitems, item]);
    setTotal(total + parseInt(item.foodprice));
  };

  return (
    <div class="container">
      <div class="row">
        {wishList.map((wish) => {
          return (
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3">
              <div class="card home-foodcard">
                <img
                  src={wish.foodimage}
                  class="card-img-top home-foodcard_image"
                  alt="Image"
                />
                <hr class="border-danger border border-1 mt-0 mb-0" />
                <div class="card-body">
                  <h2 class="card-title home-foodcard_name">{wish.foodname}</h2>
                  <p class="card-text home-foodcard_price">₹{wish.foodprice}</p>
                  <div className="d-flex flex-row mt-3">
                    <button
                      class="offset-3 col-6 btn btn-primary btn-sm fs-5 home-foodcard_cartbutton"
                      onClick={() => {
                        Addtocart(wish);
                      }}
                    >
                      Order Now
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-5 h-50 mt-0"
                      onClick={() => {
                        Removewishlist(wish);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
