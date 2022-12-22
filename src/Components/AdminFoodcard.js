import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function AdminFoodcard() {
  const [Food, setFood] = useState([]);
  useEffect(() => {
    async function getFooditems() {
      try {
        let foods = await axios.get(
          "https://food-app-backend-two.vercel.app/foodmenu",
          {
            headers: {
              Authorization: window.localStorage.getItem("foodapptoken"),
            },
          }
        );
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
        await axios.delete(
          `https://food-app-backend-two.vercel.app/foodmenu/${id}`,
          {
            headers: {
              Authorization: window.localStorage.getItem("foodapptoken"),
            },
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row mt-2">
      {Food.map((food) => {
        return (
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-4 mt-3 p-0 ">
            <div className="card home-foodcard">
              <img
                src={food.foodimage}
                className="card-img-top home-foodcard_image"
                alt="Food Image"
                id="display-image"
              />
              <hr className="border-danger border border-1 mt-0 mb-0" />
              <div className="card-body">
                <h2 className="card-title text-secondary home-foodcard_name">
                  {food.foodname}
                </h2>
                <p className="card-text home-foodcard_price">
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
    </div>
  );
}

export default AdminFoodcard;
