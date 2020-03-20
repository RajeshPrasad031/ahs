import React, { Component } from "react";
import ahslogo from "./images/AHS.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src={ahslogo} alt="website logo"></img>
        </Link>
      </div>
    );
  }
}

export default Header;
