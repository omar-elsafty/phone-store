import React from "react";
import { ProductConsumer } from "./ProductProvider";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { title, img, price } = value.modalProduct;
        if (value.modalOpen)
          return (
            <div className="outer-modal">
              <div className=" container">
                <div className="row">
                  <div className="inner-modal col-lg-4 col-8 col-md-6 mx-auto text-center text-capitalize p-5">
                    <h5>item added to the cart</h5>
                    <img className="img-fluid" src={img} alt="img" />
                    <h5>{title}</h5>
                    <h5 className="text-muted"> Price : $ {price}</h5>
                    <div className="mb-2">
                      <Link
                        className="btn btn-outline-warning"
                        to="/cart"
                        onClick={value.closeModal}
                      >
                        To Cart
                      </Link>
                    </div>
                    <button
                      className="btn btn-outline-info"
                      onClick={value.closeModal}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        return null;
      }}
    </ProductConsumer>
  );
};

export default Modal;
