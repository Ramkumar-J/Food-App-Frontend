import React from "react";
import AddFoods from "../Components/AddFood";
import AdminFoodcard from "../Components/AdminFoodcard";

function Admin() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-12">
          <h1 className="text-center text-primary">Add New Foods</h1>
        </div>
      </div>
      <AddFoods></AddFoods>
      <div className="row mt-3">
        <div className="col-lg-12">
          <h1 className="text-center text-primary">Foods List</h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-12">
          <p>
            <i className="bi bi-pencil-square fs-4 text-info"></i> -{" "}
            <span>Edit Foodcard</span> ,{" "}
            <i className="bi bi-trash3-fill fs-4 text-danger ms-3"></i> -{" "}
            <span>Delete Foodcard</span>
          </p>
        </div>
      </div>
      <AdminFoodcard></AdminFoodcard>
    </div>
  );
}

export default Admin;
