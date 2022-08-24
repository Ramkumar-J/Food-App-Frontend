import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function AdminFoodcard(){
    const [Food, setFood] = useState([]);
    useEffect(() => {
      async function getFooditems() {
        try {
          let foods = await axios.get("http://localhost:3005/foodmenu", {
            headers: {
              Authorization: window.localStorage.getItem("foodapptoken"),
            },
          });
          console.log(foods);
          setFood(foods.data);
        } catch (error) {
          console.log(error);
        }
      }
      getFooditems();
    }, []);
  
    let deletefood = async (id) => {
        try {
          let ask = window.confirm(
            "Are you sure, do you want to delete this data?"
          );
          if (ask) {
            await axios.delete(`http://localhost:3005/foodmenu/${id}`, {
              headers: {
                Authorization: window.localStorage.getItem("foodapptoken"),
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      };

     
        // const reader = new FileReader();
        // reader.addEventListener("load", () => {
        //   Food.foodimage = reader.result;
        // });
        // // reader.readAsDataURL(this.files[0]);
        // document.getElementById("file-id").files[0].name; 
     
      
      return(
    <div className="row mt-2">
    {
    Food.map((food) => {
      return (
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-4 mt-3 p-0 ">
          <div className="card cardsize">
            <img
              src={food.foodimage}
              className="card-img-top burgersize"
              alt="Image"
              id="display-image"
            />
            <hr className="border-danger border border-1 mt-0 mb-0" />
            <div className="card-body">
              <h2 className="card-title text-center mt-0 text-secondary">
                {food.foodname}
              </h2>
              <p className="card-text text-center fs-5 text-dark mb-0">
                ₹{food.foodprice}
              </p>
              <div className="foodmenu-icons d-flex justify-content-between">
                <Link to={`/editfood/${food._id}`}>
                  <i className="bi bi-pencil-square fs-4 text-info ms-3"></i>
                </Link>
                <button
                  className="btn btn-transparent"
                  onClick={() => deletefood(food._id)}
                >
                  <i className="bi bi-trash3-fill fs-4 text-danger me-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>)
}

export default AdminFoodcard;