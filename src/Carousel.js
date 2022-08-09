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
  <div class="carousel-inner position-relative">
    <div class="carousel-item active">
        {/* <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6"></div>
        </div> */}
    <img src="assets/426855-yummy-foods-42-hd-wallpaper.jpg" class="d-block img-fluid  slide-image" alt="..."/>
    <div class="carousel-caption position-absolute top-50 start-50">
        <h1 className='caption text-uppercase'>Delicious Brownie</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>

    </div>
    <div class="carousel-item ">
    <img src="assets/131333-food-desktop-wallpaper.jpg" class="d-block img-fluid slide-image" alt="..."/>
    <div class="carousel-caption ms-5 position-absolute top-50 start-50">
        <h5 className='caption'>YUMMY PIZZA</h5>
        <p className="fs-2 text-dark">Starts from Rs,150</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://wallpaperbat.com/img/419841-fast-food-burgers-wallpaper-68908-3840x2160px.jpg" class="d-block img-fluid slide-image" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="bi bi-caret-left-fill fs-1 text-secondary" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <i class="bi bi-caret-right-fill fs-1 text-secondary" aria-hidden="true"></i>
    <span class="visually-hidden">Next</span>
  </button>
  
  </div>
        </div>
    )
}

export default Carousel;