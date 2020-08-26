import React, { Component } from "react";
import { ProductConsumer } from "./ProductProvider";
import { Link } from "react-router-dom";

class Details extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            inCart,
            company,
            id,
            title,
            price,
            info,
            img,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="  mx-auto text-center text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img className="img-fluid" src={img} alt="img" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Model : {title}</h2>
                  <h4 className="text-title text-muted text-uppercase mt-3 mb-2">
                    made by : {company}
                  </h4>
                  <h4 className="text-blue">
                    <strong>Price : $ {price}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-2 mb-0">
                    some information about product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <Link to="/" className="btn btn-outline-info btnCustom mr-2">
                    Back to list
                  </Link>
                  <button disabled={inCart} onClick={()=>value.handleAddToCart(id)} className="btn btn-outline-warning btnCustom ">
                              {inCart?'In cart':'add to cart'}
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
