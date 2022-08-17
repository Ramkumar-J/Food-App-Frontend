import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Card from './Card';

function Categories() {
  // let params=useParams();
  //   let[foodmenu,setFoodmenu]=useState([]);
  //   useEffect(() => {
  //       async function getFooditem(){
  //           try {
  //               let foodsdata=await axios.get(`http://localhost:3005/home/foodmenu/${params.category}`,{
  //                   headers:{
  //                     Authorization:window.localStorage.getItem("foodapptoken"),
  //             },
  //                 });
  //               console.log(foodsdata);
  //               setFoodmenu(foodsdata.data);
  //           } catch (error) {
  //               console.log("error");
  //           }
  //       }
  //       getFooditem();
  //   },[])
  let menulist=[
    {
      image:"https://healthyrecipesblogs.com/wp-content/uploads/2013/02/tandoori-chicken-featured-2021.jpg",
      category:"All"
    },
    {
      image:"assets/Burger-category.avif",
      category:"Burger"
    },
    {
      image:"assets/Pizza-category.avif",
      category:"Pizza"
    },
    {
      image:"https://media.diageocms.com/fit-in/688x688/filters:quality(85)/filters:format(jpg)/media/g2pn1yud/barcom_serve_image_942628_woowoo.jpg",
      category:"Juice"
    },
    {
      image:"https://purobakery.com/wp-content/uploads/2022/03/red-velvet-cake-1-600x600.jpg",
      category:"Cakes"
    },
    {
      image:"https://content3.jdmagicbox.com/comp/hyderabad/d9/040pxx40.xx40.140619105314.i7d9/catalogue/arun-ice-cream-dealers-habsiguda-hyderabad-ice-cream-parlours-32xcq.jpgg",
      category:"Ice creams"
    },
  ]
  // let[datafilter,setFilter]=useState(props.Fooditems);
  // let filterProduct=(cat) => {
  //   const updatedlist=datafilter.filter((e) => {
  //     return e.category === cat
  //   })
  //   setFilter(updatedlist);
  // }
  return (
    <>
    <div className='row mt-2'>
      {
       menulist.map((menu) => {
        return(
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <Link  to={`/foodmenu/${menu.category}`}>
    <img className='img-fluid rounded-circle h-50 w-100 bg-secondary' src={menu.image}></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>{menu.category}</p>
    </Link>
    </div>
        )
       })
      }
      
      {/* <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => setFilter(props.Fooditems)}>
    <img className='img-fluid rounded-circle h-50 w-100 bg-secondary' src="https://healthyrecipesblogs.com/wp-content/uploads/2013/02/tandoori-chicken-featured-2021.jpg"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>All</p>
    </button>
    </div> */}
    {/* <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => filterProduct("Burger")}> 
    <img className='img-fluid rounded-circle h-50 w-100 bg-secondary' src="assets/Burger-category.avif"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>Burger</p>
    </button>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => filterProduct("Pizza")}>
    <img className='img-fluid rounded-circle h-50 w-100 bg-secondary' src="assets/Pizza-category.avif"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>Pizza</p>
    </button>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => filterProduct("Juice")}>
    <img className='img-fluid rounded-circle h-50 w-100 bg-secondary' src="https://media.diageocms.com/fit-in/688x688/filters:quality(85)/filters:format(jpg)/media/g2pn1yud/barcom_serve_image_942628_woowoo.jpg"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>Juice</p>
    </button>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => filterProduct("Cakes")}>
    <img className='img-fluid rounded-circle h-50 w-100 bg-secondary' src="https://purobakery.com/wp-content/uploads/2022/03/red-velvet-cake-1-600x600.jpg"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>Cakes</p>
    </button>
    </div>
    <div className='col-6 col-sm-6 col-md-4 col-lg-2'>
    <button className='btn btn-transparent' onClick={() => filterProduct("Ice creams")}>
    <img className='img-fluid rounded-circle h-50 w-100 bg-secondary' src="https://content3.jdmagicbox.com/comp/hyderabad/d9/040pxx40.xx40.140619105314.i7d9/catalogue/arun-ice-cream-dealers-habsiguda-hyderabad-ice-cream-parlours-32xcq.jpg"></img>
    <p className='fs-5 fw-bold text-center text-dark mb-0'>Ice creams</p>
    </button>
    </div> */}
  </div>
{/*  
   <Card datafilter={datafilter}></Card> */}
 
 </>
  )
}

export default Categories;