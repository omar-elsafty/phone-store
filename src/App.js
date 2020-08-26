import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Details from "./components/Detail";
import Navbar from "./components/Navbar";
import ProductList from "./components/Product-List";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductList} />{" "}
        <Route path="/cart" component={Cart} />{" "}
        <Route path="/details" component={Details} />{" "}
        <Route component={Default} />{" "}
      </Switch>{" "}
      <Modal />
    </>
  );
}

export default App;
