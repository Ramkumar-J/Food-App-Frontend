import React from 'react'

function Home() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagCksUkS5oruinwbA_hUkCai0111WbR7_TQ&usqp=CAU" class="d-block slide-image" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAb7JiTASy1hRnY1ankgJLQj_PdC0GVpCKA&usqp=CAU" class="d-block slide-image" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS879U1eZnEaUYBWGcROCMz40qxH8DoOnz1aw&usqp=CAU" class="d-block slide-image" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Home;