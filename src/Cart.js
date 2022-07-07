import React from 'react'

function Cart() {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-sm-12 col-md-6 col-lg-6'>
        <div class="card mb-3 cartitem-bg">
  <div class="row g-0">
    <div class="col-sm-4 col-md-4 col-lg-4">
      <img src="https://pngpress.com/wp-content/uploads/2020/08/uploads_burger_sandwich_burger_sandwich_PNG4135.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-sm-8 col-md-8 col-lg-8">
      <div class="card-body">
        <h3 class="card-title fw-bold">Chicken Burger</h3>
        <p class="card-text fs-4 fw-bold">₹250</p>
        <button className='btn btn-secondary btn-sm fs-5 me-2'>-</button>
        <span className='ms-2'>1</span>
        <button className='btn btn-secondary btn-sm ms-3 fs-5'>+</button>
        {/* <div className='border border-2 border-dark d-flex justify-content-between align-items-center w-50'>
        <button className='btn btn-danger fw-bold text-white'>-</button>
        <span className=''>1</span>
        <button className='btn btn-success fw-bold text-white'>+</button>
        </div> */}
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 cartitem-bg" >
  <div class="row g-0">
    <div class="col-sm-4 col-md-4 col-lg-4">
      <img src="https://pngpress.com/wp-content/uploads/2020/08/uploads_burger_sandwich_burger_sandwich_PNG4135.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-sm-8 col-md-8 col-lg-8">
      <div class="card-body">
        <h3 class="card-title fw-bold">Chicken Burger</h3>
        <p class="card-text fs-4 fw-bold">₹250</p>
        <button className='btn btn-secondary btn-sm fs-5 me-2'>-</button>
        <span className='ms-2'>1</span>
        <button className='btn btn-secondary btn-sm ms-3 fs-5'>+</button>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 cartitem-bg" >
  <div class="row g-0">
    <div class="col-sm-4 col-md-4 col-lg-4">
      <img src="https://pngpress.com/wp-content/uploads/2020/08/uploads_burger_sandwich_burger_sandwich_PNG4135.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-sm-8 col-md-8 col-lg-8">
      <div class="card-body">
        <h3 class="card-title fw-bold">Chicken Burger</h3>
        <p class="card-text fs-4 fw-bold">₹250</p>
        <button className='btn btn-secondary btn-sm fs-5 me-2'>-</button>
        <span className='ms-2'>1</span>
        <button className='btn btn-secondary btn-sm ms-3 fs-5'>+</button>
      </div>
    </div>
  </div>
</div>     
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6'>
          <div class="row">
            <div className='col-7 col-sm-7 col-md-7 col-lg-7'>
              <p className='fs-5'>Item Total</p>
              <p className='fs-5'>Deliver Charges</p>
              <p className='fs-5'>Taxes</p>
              <hr></hr>
              <p className='fs-4 fw-bold'>Grand Total</p>
            </div>
            <div className='col-5 col-sm-5 col-md-5 col-lg-5'>
              <p className='fs-5'>₹200.00</p>
              <p className='fs-5'>₹22.00</p>
              <p className='fs-5'>₹13.00</p>
              <hr></hr>
              <p className='fs-4 fw-bold'>₹235.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart