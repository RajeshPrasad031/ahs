import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./doctor.css";

export default class DoctorNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/doctor/profile">
              Account <span className="sr-only">(current)</span>
            </Link>
            <Link
              className="nav-item nav-link active"
              to="/doctor/view_patient"
            >
              View Patient
            </Link>
            <Link className="nav-item nav-link active" to="/doctor/add_patient">
              Add Patient
            </Link>
            <Link
              className="nav-item nav-link active"
              to="/doctor/update_record"
            >
              Update Patient Record
            </Link>
            <Link className="nav-item nav-link active" to="/">
              Log Out
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
