import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
function Register() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Username Required";
      }
      if (!values.email) {
        errors.email = "Email Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://food-app-backend-two.vercel.app/register",
          values
        );
        navigate("/login");
      } catch (error) {
        alert("Somethimg went wrong");
      }
    },
  });
  return (
    <section className="container register-page">
      <div className="row border border-2 register-card">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12 register-logo-container">
              <img
                className="img-fluid register-logo"
                src="https://img.icons8.com/color/70/hamburger.png"
              ></img>
            </div>
          </div>
          <div className="row mt-2 mb-0">
            <div className="col-lg-12">
              <h1 className="text-center fw-bold">Register</h1>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="row mt-3">
              <div className="col-lg-12">
                <label for="username">Username</label>
                <input
                  className="form-control"
                  id="username"
                  type={"text"}
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                ></input>
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-danger">{formik.errors.username}</div>
                ) : null}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <label for="email">Email</label>
                <input
                  className="form-control"
                  id="email"
                  type={"email"}
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                ></input>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <label for="password">Password</label>
                <input
                  className="form-control"
                  id="password"
                  type={"password"}
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                ></input>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
                <p className="mt-2">
                  You are already registered,{" "}
                  <Link className="text-danger fs-5" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col-lg-12">
                <input
                  className="form-control btn btn-primary rounded-pill"
                  type={"submit"}
                  value="Signup"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
