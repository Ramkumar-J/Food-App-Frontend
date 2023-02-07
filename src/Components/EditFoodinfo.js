import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditFoodinfo() {
  let params = useParams();
  let navigate = useNavigate();
  const [foodData, setfoodData] = useState({
    category: "",
    foodname: "",
    foodprice: "",
    foodimage: "",
  });
  useEffect(() => {
    getQuoteById();
  }, []);
  const getQuoteById = async () => {
    try {
      const response = await axios.get(
        `https://food-app-backend-two.vercel.app/foodmenu/${params.id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("foodapptoken"),
          },
        }
      );
      if (response) {
        setfoodData(response.data);
      }
    } catch (error) {
      console.log("Error while retriving Food Data by Id; ", error);
    }
  };
  const handlefoodData = (value) => {
    return setfoodData((data) => {
      return { ...value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://food-app-backend-two.vercel.app/foodmenu/${params.id}`,
        foodData,
        {
          headers: {
            Authorization: window.localStorage.getItem("foodapptoken"),
          },
        }
      );
      navigate("/admin");
    } catch (error) {
      console.log("Error while updating Food Data: ", error);
    }
  };
  // let formik = useFormik({
  //   initialValues: {
  //     category: "",
  //     foodname: "",
  //     foodprice: "",
  //     foodimage: "",
  //   },
  //   validate: (values) => {
  //     const errors = {};
  //     if (!values.category) {
  //       errors.category = "Food Category is Required";
  //     }
  //     if (!values.foodname) {
  //       errors.foodname = "Food Name is Required";
  //     }
  //     if (!values.foodprice) {
  //       errors.foodprice = "Food Price is Required";
  //     }
  //     if (!values.foodimage) {
  //       errors.foodimage = "Food Image is Required";
  //     }
  //     return errors;
  //   },
  // onSubmit: async (values) => {
  //   try {
  //     await axios.put(
  //       `https://food-app-backend-two.vercel.app/foodmenu/${params.id}`,
  //       values,
  //       {
  //         headers: {
  //           Authorization: window.localStorage.getItem("foodapptoken"),
  //         },
  //       }
  //     );
  //     navigate("/admin");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // });
  // useEffect(() => {
  //   async function getEditdata(){
  //     try {
  //       const editData=await axios.get(`https://food-app-backend-two.vercel.app/foodmenu/${params.id}`,
  //       {
  //         headers: {
  //           Authorization: window.localStorage.getItem("foodapptoken"),
  //         },
  //       });
  //       console.log(editData.data);
  //       formik.setValues(editData.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getEditdata();
  // },[])

  return (
    <section className="container admin-editfood_page">
      <div className="row admin-editfood_card">
        <div className="col-lg-12">
          <form onSubmit={handleSubmit}>
            <div className="row mt-5">
              <div className="col-lg-12">
                <label for="foodcategory">Category</label>
                <select
                  className="form-control"
                  id="foodcategory"
                  type={"text"}
                  name="category"
                  value={foodData.category}
                  onChange={(e) => handlefoodData({ category: e.target.value })}
                >
                  <option>Choose a Category</option>
                  <option>Burger</option>
                  <option>Pizza</option>
                  <option>Juice</option>
                  <option>Cakes</option>
                  <option>Ice creams</option>
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <label for="foodsname">Food Name</label>
                <input
                  className="form-control"
                  id="foodsname"
                  type={"text"}
                  name="foodname"
                  value={foodData.foodname}
                  onChange={(e) => handlefoodData({ foodname: e.target.value })}
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <label for="foodsprice">Food Price (₹)</label>
                <input
                  className="form-control"
                  id="foodsprice"
                  type={"number"}
                  name="foodprice"
                  value={foodData.foodprice}
                  onChange={(e) =>
                    handlefoodData({ foodprice: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <label for="foodsimage">
                  Food Image{" "}
                  <span className="text-secondary">(Paste the Image link)</span>
                </label>
                <input
                  className="form-control"
                  id="foodsimage"
                  type={"text"}
                  accept="image/*"
                  name="foodimage"
                  value={foodData.foodimage}
                  onChange={(e) =>
                    handlefoodData({ foodimage: e.target.value })
                  }
                ></input>
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
        </div>
        {/* <div className="col-lg-12">
          <form onSubmit={formik.handleSubmit}>
            <div className="row mt-5">
              <div className="col-lg-12">
                <label for="foodcategory">Category</label>
                <select
                  className="form-control"
                  id="foodcategory"
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
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <label for="foodsname">Food Name</label>
                <input
                  className="form-control"
                  id="foodsname"
                  type={"text"}
                  name="foodname"
                  onChange={formik.handleChange}
                  value={formik.values.foodname}
                ></input>
                {formik.touched.foodname && formik.errors.foodname ? (
                  <span className="text-danger">{formik.errors.foodname}</span>
                ) : null}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <label for="foodsprice">Food Price (₹)</label>
                <input
                  className="form-control"
                  id="foodsprice"
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
            <div className="row mt-3">
              <div className="col-lg-12">
                <label for="foodsimage">
                  Food Image{" "}
                  <span className="text-secondary">(Paste the Image link)</span>
                </label>
                <input
                  className="form-control"
                  id="foodsimage"
                  type={"text"}
                  accept="image/*"
                  name="foodimage"
                  onChange={formik.handleChange}
                  value={formik.values.foodimage}
                ></input>
                {formik.touched.foodimage && formik.errors.foodimage ? (
                  <span className="text-danger">{formik.errors.foodimage}</span>
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
        </div> */}
      </div>
    </section>
  );
}

export default EditFoodinfo;
