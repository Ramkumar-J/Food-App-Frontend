import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import FoodContext from "../Context/FoodContext";



function Home() {
  const {foodItems,setFoodItems,cartitems,setNewcartitems,total,setTotal,wishList,setNewwishList} = useContext(FoodContext);
  useEffect(() => {
    async function getFooditems(){
        try {
            let foods=await axios.get("https://sanburg-foodapp-nodeapp.herokuapp.com/foodmenu",{
              headers:{
                Authorization:window.localStorage.getItem("foodapptoken"),
        },
            });
            console.log(foods);
            setFoodItems(foods.data);
        } catch (error) {
            alert("Something went wrong")
        }
    }
    getFooditems();
},[])

let Addtocart=(item) => {
    setNewcartitems([...cartitems,item]);
    setTotal(total + parseInt(item.foodprice));
    }

let Addwishlist=(list) => {
  setNewwishList([...wishList,list]);
}

  let [datafilter, setFilter] = useState(foodItems);
  let filterProduct = (cat) => {
    const updatedlist = foodItems.filter((e) => {
      return e.category === cat; 
    });
    setFilter(updatedlist);
  };
  return (
    <>
      <Carousel></Carousel>
      <div className="container">
        <div className="row mt-2">
          <div className="col-lg-12">
            <h1>Categories</h1>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => setFilter(foodItems)}
            >
              <img
                className="img-fluid home-category_image"
                src="https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
              <p className="home-category_name">All</p>
            </button>
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Burger")}
            >
              <img
                className="img-fluid home-category_image"
                src="assets/Burger-category.avif"
              ></img>
              <p className="home-category_name">Burger</p>
            </button>
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Pizza")}
            >
              <img
                className="img-fluid home-category_image"
                src="assets/Pizza-category.avif"
              ></img>
              <p className="home-category_name">Pizza</p>
            </button>
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Juice")}
            >
              <img
                className="img-fluid home-category_image"
                src="https://media.diageocms.com/fit-in/688x688/filters:quality(85)/filters:format(jpg)/media/g2pn1yud/barcom_serve_image_942628_woowoo.jpg"
              ></img>
              <p className="home-category_name">Juice</p>
            </button>
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Cakes")}
            >
              <img
                className="img-fluid home-category_image"
                src="https://purobakery.com/wp-content/uploads/2022/03/red-velvet-cake-1-600x600.jpg"
              ></img>
              <p className="home-category_name">Cakes</p>
            </button>
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Ice creams")}
            >
              <img
                className="img-fluid home-category_image"
                src="https://content3.jdmagicbox.com/comp/hyderabad/d9/040pxx40.xx40.140619105314.i7d9/catalogue/arun-ice-cream-dealers-habsiguda-hyderabad-ice-cream-parlours-32xcq.jpg"
              ></img>
              <p className="home-category_name">
                Ice creams
              </p>
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
                    alt="Image"
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
                        Addtocart(food)
                      }}
                    >
                      Order Now
                    </button>
                    <button
                      className="btn btn-danger btn-sm rounded-circle home-foodcard_wishbutton"
                      onClick={() => Addwishlist(food)}
                      disabled={wishList.some(
                        (obj) => obj._id === food._id
                      )}
                    >
                      <i class="bi bi-heart-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
