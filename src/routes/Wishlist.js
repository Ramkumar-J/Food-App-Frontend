import React from "react";

function Wishlist(props) {
  return (
    <div class="container">
      <div class="row">
        {props.addwish.map((wish) => {
          return (
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3">
              <div class="card cardsize">
                <img
                  src={wish.foodimage}
                  class="card-img-top bg-secondary burgersize"
                  alt="Image"
                />
                <hr class="border-danger border border-1 mt-0 mb-0" />
                <div class="card-body">
                  <h2 class="card-title text-center mt-0 text-danger">
                    {wish.foodname}
                  </h2>
                  <p class="card-text text-center fs-5 text-dark mb-0">
                    ₹{wish.foodprice}
                  </p>
                  <div className="d-flex flex-row mt-3">
                    <button
                      class="offset-3 col-6  btn btn-primary btn-sm fs-5  card-btn"
                      onClick={() => {
                        props.Addcart(wish);
                      }}
                    >
                      Order Now
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-5 h-50 mt-0"
                      onClick={() => {
                        props.Removewishlist(wish);
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
