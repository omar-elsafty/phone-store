import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={Logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className='nav-link'>Products</Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button className="btn btn-outline-info btnCustom">
            <i className="fas fa-cart-plus mr-2"></i> my cart
          </button>
        </Link>
      </nav>
    );
  }
}

export default NavBar;
