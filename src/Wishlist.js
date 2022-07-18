import React from 'react'

function Wishlist(props) {
  return (
    <div class="container">
               <div class="row">
                {
                    props.addwish.map((wish) => {
                        return(
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3 cardsize">
                            <h1 class="text-center mt-2 text-danger">{wish.foodname}</h1>
                            <p class="text-center fs-3 text-dark">₹{wish.foodprice}</p>
                            <hr class="border-danger border border-1 mt-0 mb-0"/>
                                <img class="img-fluid mt-2 mb-2 burgersize" src={wish.foodimage} alt="Image" />
                                <hr class="border-danger border border-1 mt-0 mb-0"/>
                                <p class="text-warning fs-1 mt-0 mb-1 text-center">{wish.foodinfo}</p>
                                <div className='d-flex flex-row mb-3'>
                                <button class="offset-3 col-6  btn btn-primary btn-sm fs-5  card-btn" onClick={() => {props.Addcart(wish)}}>Order Now</button>
                                <button className='btn btn-danger btn-sm ms-5 h-50 mt-0' onClick={() =>props.Removewishlist(wish)}><i class="bi bi-x-lg"></i></button>
                                </div>
                         </div>
                        )
                    })
                }
                </div>
                </div>
  )
}

export default Wishlist