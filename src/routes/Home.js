import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import FoodContext from "../Context/FoodContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const {
    foodItems,
    setFoodItems,
    cartitems,
    setNewcartitems,
    total,
    setTotal,
    wishList,
    setNewwishList,
  } = useContext(FoodContext);
  useEffect(() => {
    async function getFooditems() {
      try {
        let foods = await axios.get(
          "https://food-app-backend-two.vercel.app/foodmenu",
          {
            headers: {
              Authorization: window.localStorage.getItem("foodapptoken"),
            },
          }
        );
        console.log(foods);
        setFoodItems(foods.data);
      } catch (error) {
        alert("Something went wrong");
      }
    }
    getFooditems();
  }, []);

  let Addtocart = (item) => {
    setNewcartitems([...cartitems, item]);
    setTotal(total + parseInt(item.foodprice));
  };

  let Addwishlist = (list) => {
    setNewwishList([...wishList, list]);
  };

  let [datafilter, setFilter] = useState(foodItems);
  let filterProduct = (cat) => {
    const updatedlist = foodItems.filter((e) => {
      return e.category === cat;
    });
    setFilter(updatedlist);
  };

  let handlecartToast = () => {
    toast.success("Food Added In Cart", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  let handlewishToast = () => {
    toast.success("Food Added In Wishlist", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <>
      <Carousel></Carousel>
      <section className="container">
        <div className="row mt-2">
          <div className="col-lg-12">
            <h1>Categories</h1>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => setFilter(foodItems)}
            >
              <img
                className="img-fluid home-category_image"
                src="assets/All-category.avif"
                alt="All Foods"
              ></img>
              <p className="home-category_name">All</p>
            </button>
          </div>
          <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Burger")}
            >
              <img
                className="img-fluid home-category_image"
                src="assets/Burger-category.avif"
                alt="Burger Items"
              ></img>
              <p className="home-category_name">Burger</p>
            </button>
          </div>
          <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Pizza")}
            >
              <img
                className="img-fluid home-category_image"
                src="assets/Pizza-category.avif"
                alt="Pizza Items"
              ></img>
              <p className="home-category_name">Pizza</p>
            </button>
          </div>
          <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Juice")}
            >
              <img
                className="img-fluid home-category_image"
                src="assets/Juice-category.jpg"
                alt="Juice Items"
              ></img>
              <p className="home-category_name">Juice</p>
            </button>
          </div>
          <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Cakes")}
            >
              <img
                className="img-fluid home-category_image"
                src="assets/Cakes-category.jpg"
                alt="Cake Items"
              ></img>
              <p className="home-category_name">Cakes</p>
            </button>
          </div>
          <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Ice creams")}
            >
              <img
                className="img-fluid home-category_image"
                src="assets/Icecream-category.jpg"
                alt="Icecream Items"
              ></img>
              <p className="home-category_name">Ice creams</p>
            </button>
          </div>
        </div>
        <div class="row">
          {datafilter.map((food) => {
            return (
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-4 mt-3 p-0">
                <div class="card home-foodcard">
                  <img
                    src={food.foodimage}
                    class="card-img-top home-foodcard_image"
                    alt="Food Image"
                    height={200}
                  />
                  <hr class="border-danger border border-1 mt-0 mb-0" />
                  <div class="card-body">
                    <h2 class="card-title home-foodcard_name">
                      {food.foodname}
                    </h2>
                    <p class="card-text home-foodcard_price">
                      ₹{food.foodprice}
                    </p>
                    <button
                      class="offset-3 col-6 btn btn-primary btn-sm fs-5 mt-2 home-foodcard_cartbutton"
                      onClick={() => {
                        Addtocart(food);
                        handlecartToast();
                      }}
                    >
                      Order Now
                    </button>
                    <ToastContainer></ToastContainer>
                    <button
                      className="btn btn-danger btn-sm rounded-circle home-foodcard_wishbutton"
                      onClick={() => {
                        Addwishlist(food);
                        handlewishToast();
                      }}
                      disabled={wishList.some((obj) => obj._id === food._id)}
                    >
                      <i class="bi bi-heart-fill"></i>
                    </button>
                    <ToastContainer></ToastContainer>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
