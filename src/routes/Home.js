import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Categories from "../Categories";
import Carousel from "../Components/Carousel";
import MenuContext from "../Components/Context";


function Home(props) {
  // const value=useContext(MenuContext);
  // const [foodItems,setFoodItems]=value;
  // let menulist=[
  //   {
  //     image:"https://healthyrecipesblogs.com/wp-content/uploads/2013/02/tandoori-chicken-featured-2021.jpg",
  //     category:"All"
  //   },
  //   {
  //     image:"assets/Burger-category.avif",
  //     category:"Burger"
  //   },
  //   {
  //     image:"assets/Pizza-category.avif",
  //     category:"Pizza"
  //   },
  //   {
  //     image:"https://media.diageocms.com/fit-in/688x688/filters:quality(85)/filters:format(jpg)/media/g2pn1yud/barcom_serve_image_942628_woowoo.jpg",
  //     category:"Juice"
  //   },
  //   {
  //     image:"https://purobakery.com/wp-content/uploads/2022/03/red-velvet-cake-1-600x600.jpg",
  //     category:"Cakes"
  //   },
  //   {
  //     image:"https://content3.jdmagicbox.com/comp/hyderabad/d9/040pxx40.xx40.140619105314.i7d9/catalogue/arun-ice-cream-dealers-habsiguda-hyderabad-ice-cream-parlours-32xcq.jpgg",
  //     category:"Ice creams"
  //   },
  // ]
  // let params=useParams();
  //   let[foodmenu,setFoodmenu]=useState([]);
  //   useEffect(() => {
  //       async function getFooditem(){
  //           try {
  //               let foodsdata=await axios.get(`http://localhost:3005/home/foodmenu/${params.category}`,{
  //                   headers:{
  //                     Authorization:window.localStorage.getItem("foodapptoken"),
  //             },
  //                 });
  //               console.log(foodsdata);
  //               setFoodmenu(foodsdata.data);
  //           } catch (error) {
  //               console.log("error");
  //           }
  //       }
  //       getFooditem();
  //   },[])

  let [datafilter, setFilter] = useState(props.Fooditems);
  let filterProduct = (cat) => {
    const updatedlist = datafilter.filter((e) => {
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
        {/* <Categories></Categories> */}
        <div className="row mt-2">
          
          <div className="col-6 col-sm-6 col-md-4 col-lg-2">
            <button
              className="btn btn-transparent"
              onClick={() => setFilter(props.Fooditems)}
            >
              <img
                className="img-fluid rounded-circle h-50 w-100 bg-secondary"
                src="https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
              <p className="fs-5 fw-bold text-center text-dark mb-0">All</p>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Burger")}
            >
              <img
                className="img-fluid rounded-circle h-50 w-100 bg-secondary"
                src="assets/Burger-category.avif"
              ></img>
              <p className="fs-5 fw-bold text-center text-dark mb-0">Burger</p>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Pizza")}
            >
              <img
                className="img-fluid rounded-circle h-50 w-100 bg-secondary"
                src="assets/Pizza-category.avif"
              ></img>
              <p className="fs-5 fw-bold text-center text-dark mb-0">Pizza</p>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Juice")}
            >
              <img
                className="img-fluid rounded-circle h-50 w-100 bg-secondary"
                src="https://media.diageocms.com/fit-in/688x688/filters:quality(85)/filters:format(jpg)/media/g2pn1yud/barcom_serve_image_942628_woowoo.jpg"
              ></img>
              <p className="fs-5 fw-bold text-center text-dark mb-0">Juice</p>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Cakes")}
            >
              <img
                className="img-fluid rounded-circle h-50 w-100 bg-secondary"
                src="https://purobakery.com/wp-content/uploads/2022/03/red-velvet-cake-1-600x600.jpg"
              ></img>
              <p className="fs-5 fw-bold text-center text-dark mb-0">Cakes</p>
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2">
            <button
              className="btn btn-transparent"
              onClick={() => filterProduct("Ice creams")}
            >
              <img
                className="img-fluid rounded-circle h-50 w-100 bg-secondary"
                src="https://content3.jdmagicbox.com/comp/hyderabad/d9/040pxx40.xx40.140619105314.i7d9/catalogue/arun-ice-cream-dealers-habsiguda-hyderabad-ice-cream-parlours-32xcq.jpg"
              ></img>
              <p className="fs-5 fw-bold text-center text-dark mb-0">
                Ice creams
              </p>
            </button>
          </div>
        </div>
        {/* <Card></Card> */}
        <div class="row">
          {datafilter.map((food) => {
            console.log(food);
            return (
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-4 mt-3 p-0 ">
                {/* <Card Food={food}></Card> */}
                <div class="card cardsize">
                  <img
                    src={food.foodimage}
                    class="card-img-top bg-secondary burgersize"
                    alt="Image"
                  />
                  <hr class="border-danger border border-1 mt-0 mb-0" />
                  <div class="card-body">
                    <h2 class="card-title text-center mt-0 title">
                      {food.foodname}
                    </h2>
                    <p class="card-text text-center fs-5 text-dark mb-0">
                      ₹{food.foodprice}
                    </p>
                    {/* <p class="card-text text-warning fs-1 mt-0 mb-1 text-center">{food.foodinfo}</p> */}
                    <button
                      class="offset-3 col-6  btn btn-primary btn-sm fs-5 mt-2 card-btn"
                      onClick={() => {
                        props.Addcart(food)
                      }}
                    >
                      Order Now
                    </button>
                    <button
                      className="btn btn-danger btn-sm rounded-circle wish"
                      onClick={() => props.Addwishlist(food)}
                      disabled={props.addwish.some(
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
