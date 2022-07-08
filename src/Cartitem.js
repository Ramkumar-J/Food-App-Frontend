import React from 'react'

function Cartitem(props) {
  return (
    <div class="card mb-3 cartitem-bg" >
  <div class="row g-0">
    <div class="col-sm-4 col-md-4 col-lg-4">
      <img src={props.Cartitems.foodimage} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-sm-8 col-md-8 col-lg-8">
      <div class="card-body">
        <h3 class="card-title fw-bold">{props.Cartitems.foodname}</h3>
        <p class="card-text fs-4 fw-bold">₹{props.Cartitems.foodprice}</p>
        <button className='btn btn-secondary btn-sm fs-5 me-2'>-</button>
        <span className='ms-2'>1</span>
        <button className='btn btn-secondary btn-sm ms-3 fs-5'>+</button>
        <button onClick={ () => props.Removecart(props.Cartitems)} class="btn btn-primary badge bg-primary rounded-pill">X</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Cartitem;