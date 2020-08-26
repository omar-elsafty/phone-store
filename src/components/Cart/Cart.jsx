import React, { Component } from "react";
import Title from "../Title";
import { ProductConsumer } from "../ProductProvider";
import CartItem from "./CartItem";
import Titles from "./Titles";

class Cart extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {(value) => (
          <div className="container-fluid">
            <Title
              name="your"
              title={value.cart.length > 0 ? "cart" : "cart is empty"}
            />
            {value.cart.length > 0 ? <Titles /> : null}

            <div className="row">
              {
                value.cart.map((item) => <CartItem key={item.id} item={item} />)
              }
            </div>
            <div className="row">
            
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default Cart;
