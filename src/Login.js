import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="container register-container">
            <div className="row border border-2 register">
                <div className="col-lg-12">
            <div className="row mt-2">
                <div className="col-lg-12">
                    {/* <img className="img-fluid" src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c1a8.png"></img> */}
                    
                    <h1 className="text-center fw-bold">Login</h1>
                    </div>
            </div>
            <form>
                    <div className="row mt-4">
                <div className="col-lg-12">
                    <label for="email">Email</label>
                    <input className="form-control" id="email" type={"email"}></input>
                    </div>
                    </div>
                    <div className="row mt-4">
                <div className="col-lg-12">
                    <label for="password">Password</label>
                    <input className="form-control" id="password" type={"password"}></input>
                    <p className="mt-2">You are not registered, <Link className="text-danger fs-5" to="/register">Register</Link></p>
                    </div>
                    </div>
                    <div className="row mt-4 mb-4">
                <div className="col-lg-12">
                    <input className="form-control btn btn-primary rounded-pill"  type={"submit"} value="Submit"></input>
                    </div>
                    </div>
                    </form>
                    </div>
                    </div>
        </div>
  )
}

export default Login