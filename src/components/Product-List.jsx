import React, { Component } from "react";

import Title from "./Title";
import Product from "./Product";
import { ProductConsumer } from "./ProductProvider";
class ProductList extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className='row'>
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => (
                    <Product key={product.id} product={product}/>
                  ));
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
