import React, { Component } from "react";
import ahslogo from "./images/AHS.png";

class Header extends Component {
  render() {
    return (
      <div>
        <img src={ahslogo} alt="website logo"></img>
      </div>
    );
  }
}

export default Header;
