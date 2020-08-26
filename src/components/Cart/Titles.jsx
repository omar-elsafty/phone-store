import React from "react";

const Titles = () => {
  return (
    <div className="d-none d-none d-lg-block">
      <div className="row mt-2 ">
        <div className="col-2 font-weight-bold text-uppercase text-center ">
          Products
        </div>
        <div className="col-2 font-weight-bold text-uppercase text-center ">
          Name of Product
        </div>
        <div className="col-2 font-weight-bold text-uppercase text-center ">
          Price
        </div>
        <div className="col-2 font-weight-bold text-uppercase text-center ">
          Quantity
        </div>
        <div className="col-2 font-weight-bold text-uppercase text-center ">
          Remove
        </div>
        <div className="col-2 font-weight-bold text-uppercase text-center ">
          Total
        </div>
      </div>
    </div>
  );
};

export default Titles;
