import React from "react";
import { useNavigate } from "react-router-dom";
import {useFormik} from "formik";
import axios from "axios";

function AddFoods(){
    let navigate=useNavigate();
    let formik=useFormik({
        initialValues:{
            foodname:"",
            foodprice:"",
            foodimage:"",
            foodinfo:"",
        },
        validate:(values) => {
            const errors={};
            if(!values.firtname){
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
                await axios.post("http://localhost:3005/burger",values);
                navigate("/burgeritems");
            } catch (error) {
                
            }
        }
    });
    return(
        <div className="container add-food">
            <div className="row addfood-bg">
                <div className="col-lg-12">
                    <form onSubmit={formik.handleSubmit}>
                <div className="row mt-5">
                <div className="col-lg-12">
                    <label for="foodname">Food Name</label>
                    <input className="form-control" id="foodname" type={"text"} name="foodname" onChange={formik.handleChange} value={formik.values.foodname}></input>
                    {
                        formik.touched.foodname && formik.errors.foodname ? (<span className="text-danger">{formik.errors.foodnmae}</span>) : null
                    }
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="foodprice">Food Price (₹)</label>
                    <input className="form-control" id="foodprice" type={"number"} name="foodprice" onChange={formik.handleChange} value={formik.values.foodprice}></input>
                    {
                        formik.touched.foodprice && formik.errors.foodprice ? (<span className="text-danger">{formik.errors.foodprice}</span>) : null
                    }
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="foodimage">Food Image <span className="text-secondary">(Paste the Image link)</span></label>
                    <input className="form-control" id="foodimage" type={"text"} name="foodimage" onChange={formik.handleChange} value={formik.values.foodimage}></input>
                    {
                        formik.touched.foodimage && formik.errors.foodimage ? (<span className="text-danger">{formik.errors.foodimage}</span>) : null
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
            </div>
        </div>
        </div>
    )
}

export default AddFoods;