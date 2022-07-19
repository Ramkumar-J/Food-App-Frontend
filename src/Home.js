import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Categories from './Categories';
import FoodMenu from './FoodMenu';


function Home(props){
  let[datafilter,setFilter]=useState(props.Fooditems);
  let filterProduct=(cat) => {
    const updatedlist=datafilter.filter((e) => {
      return e.category === cat
    })
    setFilter(updatedlist);
  }
  return (
    <>
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-lg-12'>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://wallpaperaccess.com/full/271745.jpg" class="d-block img-fluid slide-image" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://ae01.alicdn.com/kf/HTB1tU52SwHqK1RjSZFkq6x.WFXaQ/beibehang-Custom-3D-wallpaper-HD-hand-painted-Western-restaurant-fast-food-restaurant-burger-shop-background-wall.jpg" class="d-block img-fluid slide-image" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://wallpaperbat.com/img/419841-fast-food-burgers-wallpaper-68908-3840x2160px.jpg" class="d-block img-fluid slide-image" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
  </div>
  </div>
  </div>
  <div className='row mt-2'>
    <div className='col-lg-12'>
    <h1>Categories</h1>
    </div>  
  </div>
  <div className='row mt-2'>
      <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => setFilter(props.Fooditems)}>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>All</p>
    </button>
    
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => filterProduct("Burger")}> 
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>Burger</p>
    </button>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => filterProduct("Pizza")}>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>Pizza</p>
    </button>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => filterProduct("Juice")}>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/o2_assets/e6c74944b4d15017b51c07d5a97b34961648972347.png"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>Juice</p>
    </button>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => filterProduct("Cakes")}>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/dish_photos/bfe/60290489131b268904260f6983acebfe.png?fit=around|130:130&crop=130:130;*,*"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>Cakes</p>
    </button>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => filterProduct("Ice creams")}>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>Ice creams</p>
    </button>
    </div>
  </div>
  <div className='row mt-2'>
      <div className='col-lg-12'>
      <Link className='' to="/addmenu"><button className='btn btn-primary mt-3 mb-3 w-25 mx-auto'>Add Foods</button></Link>
        </div>
        </div>
  <div class="row">
                {
                    datafilter.map((food) => {
                        return(
                            <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-4 mt-3 p-0 ">
                            {/* <h1 class="text-center mt-2 text-danger">{food.foodname}</h1>
                            <p class="text-center fs-3 text-dark mb-0">₹{food.foodprice}</p>
                            <hr class="border-danger border border-1 mt-0 mb-0"/>
                                <img class="img-fluid mt-0 mb-0 burgersize" src={food.foodimage} alt="Image" />
                                <hr class="border-danger border border-1 mt-0 mb-0"/> */}
                                {/* <p class="text-warning fs-1 mt-0 mb-1 text-center">{food.foodinfo}</p> */}
                                {/* <div className='d-flex flex-row mt-3 mb-3'>
                                <button class="offset-3 col-6  btn btn-primary btn-sm fs-5  card-btn" onClick={() => {props.Addcart(food)}}>Order Now</button>
                                <button className='btn btn-transparent btn-sm ms-5 h-100 mt-0' onClick={() =>props.Addwishlist(food)}><i class="bi bi-suit-heart"></i></button>
                                </div> */}
                                <div class="card cardsize">
  <img src={food.foodimage} class="card-img-top burgersize" alt="Image"/>
  <hr class="border-danger border border-1 mt-0 mb-0"/>
  <div class="card-body">
    <h2 class="card-title text-center mt-0 text-danger">{food.foodname}</h2>
    <p class="card-text text-center fs-5 text-dark mb-0">₹{food.foodprice}</p>
    <button class="offset-3 col-6  btn btn-primary btn-sm fs-5 mt-2 card-btn" onClick={() => {props.Addcart(food)}}>Order Now</button>
  </div>
</div>
                         </div>
                        )
                    })
                }
                </div>
  {/* <Categories Menuitems={props.Fooditems} ></Categories> */}
  {/* <div className='row mt-2'>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <a className='nav-link' href='#'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Burger</p>
    </a>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <a className='nav-link' href='#'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Pizza</p>
    </a>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <a className='nav-link' href='#'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Biriyani</p>
    </a>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <a className='nav-link' href='#'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/o2_assets/e6c74944b4d15017b51c07d5a97b34961648972347.png"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Juice</p>
    </a>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <a className='nav-link' href='#'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/dish_photos/bfe/60290489131b268904260f6983acebfe.png?fit=around|130:130&crop=130:130;*,*"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Cakes</p>
    </a>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
      <a className='nav-link' href='#'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Ice creams</p>
    </a>
    </div>
  </div> */}
  </div>
  </>
  )
}

export default Home;


 