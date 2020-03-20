import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./all.css";

export default class DoctorNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="#">
              Account <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link active" to="/doctor/viewPatient">
              View Patient
            </Link>
            <Link className="nav-item nav-link active" to="#">
              Add Patient
            </Link>
            <Link className="nav-item nav-link active" to="#">
              Update Patient Record
            </Link>
            <Link className="nav-item nav-link active" to="#">
              Log Out
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
