import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckoutForm() {
  let formik = useFormik({
    initialValues: {
      mobilenumber: "",
      address: "",
      paymentmethod: "",
      cardnumber: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.mobilenumber) {
        errors.mobilenumber = "Required";
      }
      if (!values.address) {
        errors.address = "Required";
      }
      if (!values.paymentmethod) {
        errors.paymentmethod = "Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://food-app-backend-two.vercel.app/checkout",
          values,
          {
            headers: {
              Authorization: window.localStorage.getItem("foodapptoken"),
            },
          }
        );
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    },
  });
  let OrderToast = () => {
    return (
      <div>
        <img
          className="img-fluid w-25"
          src="https://st3.depositphotos.com/15870672/36104/v/380/depositphotos_361046324-stock-illustration-cartoon-character-food-delivery-man.jpg?forcejpeg=true"
        ></img>
        <span className="text-secondary ms-0">Order Placed Successfully</span>
      </div>
    );
  };
  let handleToast = () => {
    toast.success(<OrderToast></OrderToast>, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title text-info" id="staticBackdropLabel">
              Delivery Information
            </h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <form onSubmit={formik.handleSubmit}>
              <label>Mobile Number</label>
              <input
                className="form-control mt-1 mb-1"
                type={"number"}
                name="mobilenumber"
                onChange={formik.handleChange}
                value={formik.values.mobilenumber}
              ></input>
              {formik.touched.mobilenumber && formik.errors.mobilenumber ? (
                <div className="text-danger">{formik.errors.mobilenumber}</div>
              ) : null}
              <label>Delivery Address</label>
              <textarea
                className="form-control mt-1 mb-1"
                type={"text"}
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
              ></textarea>
              {formik.touched.address && formik.errors.address ? (
                <div className="text-danger">{formik.errors.address}</div>
              ) : null}
              <label>Payment method</label>
              <select
                className="form-control mt-2 mb-1"
                type={"checkbox"}
                name="paymentmethod"
                onChange={formik.handleChange}
                value={formik.values.paymentmethod}
              >
                <option>Select a Payment method</option>
                <option>Cash On Delivery</option>
                <option>Card</option>
              </select>
              {formik.touched.paymentmethod && formik.errors.paymentmethod ? (
                <div className="text-danger">{formik.errors.paymentmethod}</div>
              ) : null}
              <input
                className="form-control mt-2 mb-1"
                type={"number"}
                placeholder="Card number"
                name="cardnumber"
                onChange={formik.handleChange}
                value={formik.values.cardnumber}
              ></input>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <input
                  disabled={!formik.errors}
                  type={"submit"}
                  class="btn btn-success"
                  value="Submit"
                  onClick={handleToast}
                ></input>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
