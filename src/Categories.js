import React from 'react'
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className='row mt-2'>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <Link className='nav-link' to='/category'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Burger</p>
    </Link>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <Link className='nav-link' to='/category'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Pizza</p>
    </Link>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <Link className='nav-link' to='/category'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Biriyani</p>
    </Link>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <Link className='nav-link' to='/category'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/o2_assets/e6c74944b4d15017b51c07d5a97b34961648972347.png"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Juice</p>
    </Link>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <Link className='nav-link' to='/category'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/dish_photos/bfe/60290489131b268904260f6983acebfe.png?fit=around|130:130&crop=130:130;*,*"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Cakes</p>
    </Link>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
      <Link className='nav-link' to='/category'>
    <img className='img-fluid rounded-circle h-50 w-100' src="https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png"></img>
    <p className='fs-5 fw-bold text-center text-dark'>Ice creams</p>
    </Link>
    </div>
  </div>
  )
}

export default Categories;