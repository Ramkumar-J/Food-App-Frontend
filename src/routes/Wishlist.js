import React, { useContext, useEffect, useState } from "react";
import FoodContext from "../Context/FoodContext";


function Wishlist() {
  const {cartitems,setNewcartitems,total,setTotal,wishList,setNewwishList} = useContext(FoodContext);
  // let Addwishlist=(list) => {
  //   setNewwishList([...wishList,list]);
  // }
  
  let Removewishlist=(list) => {
    let index=wishList.findIndex(obj => obj._id === list._id);
    wishList.splice(index,1);
    setNewwishList([...wishList])
  }

  let Addtocart=(item) => {
    //  dispatch({type:"Add_To_Cart",item})
      setNewcartitems([...cartitems,item]);
      setTotal(total + parseInt(item.foodprice));
      }

  // let[newWish,oldWish]=useState(props.addwish)

  // useEffect(() => {
  //   const data=localStorage.getItem("wishkey");
  //   console.log(data);
  //   if(data){
  //     oldWish(JSON.parse(data));
  //   }
  // },[])

  // useEffect(() => {
  //   localStorage.setItem("mywish",JSON.stringify(newWish));
  // },[newWish])
  // useEffect(() => {
  //   // if(window.localStorage.getItem("myKey")) {
  //     let wishData=window.localStorage.getItem("myKey");
  //     if(wishData){
  //       oldWish(JSON.parse(wishData));
  //     }
      
  //   // }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("myKey", JSON.stringify(newWish));
  // }, []);

  return (
    <div class="container">
      <div class="row">
        {wishList.map((wish) => {
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
