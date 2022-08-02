import React from 'react'

function Footer() {
  return (
    <div className='container-fluid bg-light'>
      <div className='container'>
      <div className='row mt-3'>
        <div className='col-lg-12'>
          <h2 className='fw-bold'>SanBurg Restaurent</h2>
        </div>
        </div>
        <div className='row text-uppercase fs-6 mb-0'>
        <div className='col-lg-3'>
          <p>About sanburg</p>
        </div>
        <div className='col-lg-3'>
          <p>Sanburg branches</p>
        </div>
        <div className='col-lg-3'>
          <p>For Restaurents</p>
        </div>
        <div className='col-lg-3'>
          <p>Learn more</p>
        </div>
        </div>
        <div className='row mt-0 text-capitalize text-secondary'>
        <div className='col-lg-3'>
          <a href="#">who we are</a>
        </div>
        <div className='col-lg-3'>
          <a href="#">Chennai</a>
        </div>
        <div className='col-lg-3'>
          <a href="#">partner with us</a>
        </div>
        <div className='col-lg-3'>
          <a href="#">privacy</a>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Footer;