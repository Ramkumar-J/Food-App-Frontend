import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { Upload } from "upload-js";

function AddFoods() {
  // const upload = new Upload({ apiKey: "free" });
  // const uploadFile = upload.createFileInputHandler({
  //   // onProgress: ({ progress }) => {
  //   //   console.log(`${progress}% complete`)
  //   // },
  //   onUploaded: ({ fileUrl }) => {
  //     alert(`File uploaded!\n${fileUrl}`);
  //   },
  //   onError: (error) => {
  //     alert(`Error!\n${error.message}`);
  //   }
  // });
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      category: "",
      foodname: "",
      foodprice: "",
      foodimage: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.category) {
        errors.category = "Food Category is Required";
      }
      if (!values.foodname) {
        errors.foodname = "Food Name is Required";
      }
      if (!values.foodprice) {
        errors.foodprice = "Food Price is Required";
      }
      if (!values.foodimage) {
        errors.foodimage = "Food Image is Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      // let data=new FormData();
      // data.append("foodimage", values.foodimage);
      try {
        await axios.post(
          "https://food-app-backend-two.vercel.app/foodmenu",
          values,
          {
            headers: {
              Authorization: window.localStorage.getItem("foodapptoken"),
            },
            // Body:data
          }
        );

        navigate("/admin");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <section className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row mt-3">
          <div className="col-lg-6">
            <label for="category">Category</label>
            <select
              className="form-control"
              id="category"
              type={"text"}
              name="category"
              onChange={formik.handleChange}
              value={formik.values.category}
            >
              <option>Choose a Category</option>
              <option>Burger</option>
              <option>Pizza</option>
              <option>Juice</option>
              <option>Cakes</option>
              <option>Ice creams</option>
            </select>
            {formik.touched.category && formik.errors.category ? (
              <span className="text-danger">{formik.errors.category}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label for="foodimage">
              Food Image{" "}
              <span className="text-secondary">(Paste the Image link)</span>
            </label>
            <input
              className="form-control"
              id="foodimage"
              type={"text"}
              name="foodimage"
              // accept="image/*"
              onChange={formik.handleChange}
              // onChange={(e) => formik.setFieldValue("foodimage",e.target.files[0])}
              value={formik.values.foodimage}
              // onchange={(e) => uploadFile(e)}
            ></input>
            {/* {
            console.log(formik.values.foodimage)
           } */}
            {formik.touched.foodimage && formik.errors.foodimage ? (
              <span className="text-danger">{formik.errors.foodimage}</span>
            ) : null}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <label for="foodname">Food Name</label>
            <input
              className="form-control"
              id="foodname"
              type={"text"}
              name="foodname"
              onChange={formik.handleChange}
              value={formik.values.foodname}
            ></input>
            {formik.touched.foodname && formik.errors.foodname ? (
              <span className="text-danger">{formik.errors.foodname}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label for="foodprice">Food Price (₹)</label>
            <input
              className="form-control"
              id="foodprice"
              type={"number"}
              name="foodprice"
              onChange={formik.handleChange}
              value={formik.values.foodprice}
            ></input>
            {formik.touched.foodprice && formik.errors.foodprice ? (
              <span className="text-danger">{formik.errors.foodprice}</span>
            ) : null}
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <div className="col-lg-12">
            <input
              className="form-control btn btn-primary"
              type={"submit"}
              value="Submit"
            ></input>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddFoods;
