import React from 'react'
import Categories from './Categories';

function Home() {
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
  <Categories></Categories>
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


 