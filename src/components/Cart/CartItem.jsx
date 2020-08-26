import React, { Component } from "react";
import { ProductConsumer } from "../ProductProvider";

class CartItem extends Component {
  state = {};
  render() {
    const { img, price, title, count, id, total } = this.props.item;
    console.log(this.props);
    return (
      <ProductConsumer>
        {(value) => {
          return (
              <> 
              <div className="col-10 col-lg-2 mx-auto text-center ">
                <img src={img} alt="img" className="img-fluid max-width" style={{width:'5rem'}} />
              </div>
              <div className="col-10 col-lg-2 mx-auto font-weight-bold text-uppercase text-center mt-4 ">
                {title}
              </div>
              <div className="col-10 col-lg-2 mx-auto font-weight-bold text-uppercase text-center  mt-4 ">
                $ {price}
              </div>
              <div className="col-10 col-lg-2 mx-auto font-weight-bold text-uppercase text-center mt-4  ">
                      <button className="btn btn-sm btn-outline-dark mx-2 px-2"
                          onClick={() => value.decrement(id)}
                      disabled={count<=0}>
                  -
                </button>
                <button className="btn btn-sm btn-outline-dark mx-2 px-2">
                  {count}
                </button>
                      <button className="btn btn-sm btn-outline-dark mx-2 px-2"
                      onClick={()=>value.increment(id)}>
                  +
                </button>
              </div>
              <div className="col-10 col-lg-2  mx-auto font-weight-bold text-danger text-uppercase text-center  mt-4 ">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={()=>value.deleteProduct(id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
              <div className="col-10 col-lg-2 mx-auto font-weight-bold text-uppercase text-center  mt-4 ">
                $ {total}
                  </div>
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default CartItem;
