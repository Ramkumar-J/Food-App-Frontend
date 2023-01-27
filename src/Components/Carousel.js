import React from "react";

function Carousel() {
  return (
    <section className="container-fluid p-0">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="assets/131333-food-desktop-wallpaper.jpg"
              class="d-block bg-secondary home-carousel_image"
              alt="Carousel Image"
            />
            <div class="carousel-caption">
              <h5 className="home-carousel_caption">Yummy Pizza</h5>
              <p className="home-carousel_subcaption">Starts from Rs,150</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="assets/photo-1580294785554-728a44dfc5c9.jpg"
              class="d-block bg-secondary home-carousel_image"
              alt="Carousel Image"
            />
            <div class="carousel-caption">
              <h1 className="home-carousel_caption">Fresh Juices</h1>
              <p className="home-carousel_subcaption">Chill Bro</p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="assets/photo-1581821873113-5a5371959ccf.jpg"
              class="d-block bg-secondary home-carousel_image"
              alt="Carousel Image"
            />
            <div class="carousel-caption">
              <h5 className="home-carousel_caption">Special Cakes</h5>
              <p className="home-carousel_subcaption">
                with Special Offers of 20%
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="bi bi-caret-left-fill fs-1" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <i class="bi bi-caret-right-fill fs-1" aria-hidden="true"></i>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Carousel;
