import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddFoods from "./AddFood";
import FoodMenu from "./FoodMenu";

function Admin(){
    // let navigate=useNavigate();
    const[Food,setFood]=useState([]);
    let formik=useFormik({
        initialValues:{
            category:"",
            foodname:"",
            foodprice:"",
            foodimage:"",
            foodinfo:"",
        },
        validate:(values) => {
            const errors={};
            if(!values.category){
                errors.category="Food Category is Required";
            }
            if(!values.foodname){
                errors.foodname="Food Name is Required";
            }
            if(!values.foodprice){
                errors.foodprice="Food Price is Required";
            }
            if(!values.foodimage){
                errors.foodimage="Food Image is Required";
            }
            if(!values.foodinfo){
                errors.foodinfo="Food Info is Required";
            }
            return errors;
        },
        onSubmit:async(values) => {
            try {
                await axios.post("http://localhost:3005/foodmenu",values);
                // navigate("/home");
            } catch (error) {
                console.log(error);
            }
        }
    });
    
    useEffect(() => {
        async function getFooditems(){
            try {
                let foods=await axios.get("http://localhost:3005/foodmenu");
                console.log(foods);
                setFood(foods.data);
            } catch (error) {
                console.log("error");
            }
        }
        getFooditems();
    },[])

let deletefood=async(id) => {
    try {
        let ask = window.confirm(
            "Are you sure, do you want to delete this data?"
          );
          if (ask){
        await axios.delete(`http://localhost:3005/foodmenu/${id}`);
          }
    } catch (error) {
        console.log(error);
    }   
}
    return(
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-12">
                    <h1 className="text-center text-primary">Add New Foods</h1>
                {/* <AddFoods></AddFoods> */}
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
            <div className="row mt-3">
                <div className="col-lg-6">
                <label for="category">Category</label>
                    <select className="form-control" id="category" type={"text"} name="category" onChange={formik.handleChange} value={formik.values.category}>
                        <option>Choose a Category</option>
                        <option>Burger</option>
                        <option>Pizza</option>
                        <option>Juice</option>
                        <option>Cakes</option>
                        <option>Ice creams</option>
                    </select>
                    {
                        formik.touched.category && formik.errors.category ? (<span className="text-danger">{formik.errors.category}</span>) : null
                    }
                </div>
                <div className="col-lg-6">
                <label for="foodimage">Food Image <span className="text-secondary">(Paste the Image link)</span></label>
                    <input className="form-control" id="foodimage" type={"text"} name="foodimage" accept="image/*" onChange={formik.handleChange} value={formik.values.foodimage} ></input>
                    {
                       
                        formik.touched.foodimage && formik.errors.foodimage ? (<span className="text-danger">{formik.errors.foodimage}</span>) : null
                    }
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-6">
                <label for="foodname">Food Name</label>
                    <input className="form-control" id="foodname" type={"text"} name="foodname" onChange={formik.handleChange} value={formik.values.foodname}></input>
                    {
                        formik.touched.foodname && formik.errors.foodname ? (<span className="text-danger">{formik.errors.foodname}</span>) : null
                    }
                </div>
                <div className="col-lg-6">
                <label for="foodprice">Food Price (₹)</label>
                    <input className="form-control" id="foodprice" type={"number"} name="foodprice" onChange={formik.handleChange} value={formik.values.foodprice}></input>
                    {
                        formik.touched.foodprice && formik.errors.foodprice ? (<span className="text-danger">{formik.errors.foodprice}</span>) : null
                    }
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="foodinfo">Food Info</label>
                    <input className="form-control" id="foodinfo" type={"text"} name="foodinfo" onChange={formik.handleChange} value={formik.values.foodinfo}></input>
                    {
                        formik.touched.foodinfo && formik.errors.foodinfo ? (<span className="text-danger">{formik.errors.foodinfo}</span>) : null
                    }
                </div>
                </div>
                <div className="row mt-3 mb-5">
                <div className="col-lg-12">
                    <input className="form-control btn btn-primary"  type={"submit"} value="Submit"></input>
                </div>
                </div>
            </form>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <h1 className="text-center text-primary">Foods List</h1>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                   <p><i class="bi bi-pencil-square fs-4 text-info"></i> - <span>Edit Foodcard</span> , <i class="bi bi-trash3-fill fs-4 text-danger ms-3"></i> - <span>Delete Foodcard</span></p>
                   {/* <p><i class="bi bi-trash3-fill fs-4 text-danger me-3"></i> - <span>Delete Foodcard</span></p> */}
                </div>
            </div>
            <div className="row mt-2">
                    {
                        Food.map((food) => {
                            return(
                                <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-4 mt-3 p-0 ">
                                <div class="card cardsize">
  <img src={food.foodimage} class="card-img-top burgersize" alt="Image"/>
  <hr class="border-danger border border-1 mt-0 mb-0"/>
  <div class="card-body">
    <h2 class="card-title text-center mt-0 text-secondary">{food.foodname}</h2>
    <p class="card-text text-center fs-5 text-dark mb-0">₹{food.foodprice}</p>
    <div className="foodmenu-icons d-flex justify-content-between">
    <Link to={`/editfood/${food._id}`}><i class="bi bi-pencil-square fs-4 text-info ms-3"></i></Link>
    <button className="btn btn-transparent" onClick={() => deletefood(food._id)}><i class="bi bi-trash3-fill fs-4 text-danger me-3"></i></button>
    </div>
    {/* <button class="offset-3 col-6  btn btn-primary btn-sm fs-5 mt-2 card-btn" onClick={() => {props.Addcart(food)}}>Order Now</button> */}
  </div>
</div>
</div>
                            )
                        })
                    }
                </div>
            
        </div>
    )
}

export default Admin;