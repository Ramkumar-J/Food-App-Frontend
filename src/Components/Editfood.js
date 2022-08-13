import axios from 'axios';
import { useFormik } from 'formik';
// import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Editfood() {
    let params=useParams();
    let navigate=useNavigate();
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
                await axios.put(`http://localhost:3005/foodmenu/${params.id}`,values);
                navigate("/admin");
            } catch (error) {
                console.log("error");
            }
        }
    });

    useEffect(() => {
        async function editFooditem(){
            try {
                let food=await axios.get(`http://localhost:3005/foodmenu/${params.id}`);
                // console.log(food.data);
                // let foodData=food.data;
                formik.setValues(food.data);
            } catch (error) {
                console.log("error");
            }
        }
        editFooditem();
    },[])

    return(
        <div className="container add-food">
            
        {/* <form onSubmit={formik.handleSubmit}> */}
            <div className="row addfood-bg">
                <div className="col-lg-12">
                    <form onSubmit={formik.handleSubmit}>
                    <div className="row mt-5">
                <div className="col-lg-12">
                    <label for="foodcategory">Category</label>
                    <select className="form-control" id="foodcategory" type={"text"} name="category" onChange={formik.handleChange} value={formik.values.category}>
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
                </div>
                <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="foodsname">Food Name</label>
                    <input className="form-control" id="foodsname" type={"text"} name="foodname" onChange={formik.handleChange} value={formik.values.foodname}></input>
                    {
                        formik.touched.foodname && formik.errors.foodname ? (<span className="text-danger">{formik.errors.foodname}</span>) : null
                    }
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="foodsprice">Food Price (₹)</label>
                    <input className="form-control" id="foodsprice" type={"number"} name="foodprice" onChange={formik.handleChange} value={formik.values.foodprice}></input>
                    {
                        formik.touched.foodprice && formik.errors.foodprice ? (<span className="text-danger">{formik.errors.foodprice}</span>) : null
                    }
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="foodsimage">Food Image <span className="text-secondary">(Paste the Image link)</span></label>
                    <input className="form-control" id="foodsimage" type={"text"} name="foodimage" accept="image/*" onChange={formik.handleChange} value={formik.values.foodimage} ></input>
                    {
                       
                        formik.touched.foodimage && formik.errors.foodimage ? (<span className="text-danger">{formik.errors.foodimage}</span>) : null
                    }
                    
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="foodsinfo">Food Info</label>
                    <input className="form-control" id="foodsinfo" type={"text"} name="foodinfo" onChange={formik.handleChange} value={formik.values.foodinfo}></input>
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
            </div>
        </div>
        {/* </form> */}
    </div>
    )
}

export default Editfood;