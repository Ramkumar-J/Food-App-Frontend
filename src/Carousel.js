import React from "react";

function Carousel(){
    return(
        <div className="container-fluid p-0">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        {/* <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6"></div>
        </div> */}
    {/* <img src="assets/426855-yummy-foods-42-hd-wallpaper.jpg" class="d-block img-fluid  slide-image" alt="..."/> */}
    <img src="https://images.unsplash.com/photo-1580294785554-728a44dfc5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" class="d-block img-fluid  slide-image" alt="..."/>
    <div class="carousel-caption">
        <h1 className='caption text-uppercase text-dark'>Fresh Juices</h1>
        <p className="fs-1 text-dark">Konjam Chill Pannu Maapi</p>
      </div>

    </div>
    <div class="carousel-item">
    <img src="assets/131333-food-desktop-wallpaper.jpg" class="d-block img-fluid slide-image" alt="..."/>
    <div class="carousel-caption">
        <h5 className='caption text-dark'>YUMMY PIZZA</h5>
        <p className="fs-1 text-dark">Starts from Rs,150</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://images.unsplash.com/photo-1581821873113-5a5371959ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block img-fluid slide-image" alt="..."/>
    <div class="carousel-caption">
        <h5 className='caption text-uppercase text-dark'>Special Cakes</h5>
        <p className="fs-1 text-dark">with Special Offers of 20%</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="bi bi-caret-left-fill fs-1" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <i class="bi bi-caret-right-fill fs-1" aria-hidden="true"></i>
    <span class="visually-hidden">Next</span>
  </button>
  
  </div>
        </div>
    )
}

export default Carousel;