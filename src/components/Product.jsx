import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./ProductProvider";

class Product extends Component {
  state = {};
  render() {
    const { inCart, id, title, price, info, img } = this.props.product;

    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div className="col-9 col-md-6 col-lg-3 mx-auto my-3">
              <div className="card">
                <div className="img-container p-5">
                  <Link to="/details" onClick={() => value.handleDetail(id)}>
                    <img src={img} alt="img" className="card-img-top" />
                  </Link>
                  <button
                    onClick={() => {
                      value.handleAddToCart(id);
                      value.openModal(id);
                    }}
                    className="cart-btn"
                    disabled={inCart}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0">in cart</p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <p className="mb-0 align-self-center">{title}</p>
                  <h5 className="mb-0 font-italic text-blue">
                    <span className="mr-1">$</span>
                    {price}
                  </h5>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Product;
