import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";

const productContext = React.createContext();

class ProdcutsProvider extends Component {
  state = {
    products: [],
    cart: [],
    detailProduct,
    modalOpen: false,
    modalProduct: detailProduct,
  };

  componentDidMount() {
    this.setProducte();
  }

  setProducte = () => {
    let tempProducts = [];
    storeProducts.forEach((product) => {
      const productCopy = { ...product };
      tempProducts = [...tempProducts, productCopy];
    });
    this.setState({ products: tempProducts });
  };

  handleDetail = (id) => {
    let products = [...this.state.products];
    let detailProduct = products.find((item) => {
      return item.id == id;
    });
    this.setState({ detailProduct });
  };

  handleAddToCart = (id) => {
    let products = [...this.state.products];
    const item = products.find((item) => {
      return item.id == id;
    });
    item.inCart = !item.inCart;
    item.count = 1;
    item.total = item.price;
    this.setState({ products, cart: [...this.state.cart, item] });
    console.log(this.state.cart);
  };

  openModal = (id) => {
    let products = [...this.state.products];
    let modalProduct = products.find((item) => {
      return item.id == id;
    });
    this.setState({ modalProduct, modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  increment = (id) => {
    let products = [...this.state.products];
    let Product = products.find((item) => {
      return item.id == id;
    });
    Product.count += 1;
    Product.total += Product.price;
    this.setState({ products });
  };

  decrement = (id) => {
    let products = [...this.state.products];
    let Product = products.find((item) => {
      return item.id == id;
    });
    Product.count -= 1;
    Product.total -= Product.price;
    this.setState({ products });
  };

  deleteProduct = (id) => {
    let products = [...this.state.products];
    let product = products.find((item) => {
      return item.id == id;
    });
    product.count = 0;
    product.total = 0;
    product.inCart = false;
    let cart = [...this.state.cart]
    cart.pop(product)
    this.setState({ products, cart });
  };

  //   setProducte = () => {
  //       let copy= JSON.stringify(storeProducts)
  //         copy = JSON.parse(copy)
  //         this.setState({ products: copy })

  //     this.setState({ products: storeProducts });
  //     console.log(this.state.products === storeProducts);
  //   };

  render() {
    return (
      <productContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleAddToCart: this.handleAddToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment:this.increment,
          decrement: this.decrement,
          deleteProduct:this.deleteProduct
        }}
      >
        {this.props.children}
      </productContext.Provider>
    );
  }
}

const ProductConsumer = productContext.Consumer;
export { ProdcutsProvider, ProductConsumer };
