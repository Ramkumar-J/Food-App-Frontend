import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    let navigate=useNavigate();
    let formik=useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validate:(values) => {
            const errors={};
            if(!values.email){
                errors.email="Email Required"
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }

            if(!values.password){
                errors.password="Password Required"
            }
            return errors;
        },
        onSubmit:async (values) => {
            try {
               let signin= await axios.post("http://localhost:3005/login",values);
               window.localStorage.setItem("foodapptoken",signin.data.token);
                navigate("/home");
            } catch (error) {
                alert("Credential not found");
            }
        }
        
    })
    return(
        <div className="container register-container">
            <div className="row border border-2">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            {/* <div className="row">
                <div className="col-lg-12">
                    <img className="img-fluid logo-image" src="https://img.icons8.com/color/70/hamburger.png"></img>
                    </div>
            </div> */}
                    <div className="row mt-2 mb-0">
                <div className="col-lg-12">
                    <h1 className="text-center fw-bold">Login</h1>
                    </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                    <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="email">Email</label>
                    <input className="form-control" id="email" type={"email"} name="email" onChange={formik.handleChange} value={formik.values.email}></input>
                    {
                        formik.touched.email && formik.errors.email ? (<div className="text-danger">{formik.errors.email}</div>) : null
                    }
                    </div>
                    </div>
                    <div className="row mt-3">
                <div className="col-lg-12">
                    <label for="password">Password</label>
                    <input className="form-control" id="password" type={"password"} name="password" onChange={formik.handleChange} value={formik.values.password}></input>
                    {
                        formik.touched.password && formik.errors.password ? (<div className="text-danger">{formik.errors.password}</div>) : null
                    }
                    <p className="mt-2">You are Not registered, <Link className="text-danger fs-5" to="/register">Register</Link></p>
                    </div>
                    </div>
                    <div className="row mt-3 mb-3">
                <div className="col-lg-12">
                    <input className="form-control btn btn-primary rounded-pill"  type={"submit"} value="Login"></input>
                    </div>
                    </div>
                    </form>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className='row'>
                            <div className='col-lg-12 p-0'>
                            <img className='img-fluid login-image' src="https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-classic-black-forest-cake-half-kg--108742-m.jpg"></img>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>
    )
}

export default Login