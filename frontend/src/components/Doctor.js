import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import "./all.css";
class DoctorHomepage extends Component {
  render() {
    return (
      <Router>
        <div>
          <Login />
        </div>
      </Router>
    );
  }
}

export default DoctorHomepage;
