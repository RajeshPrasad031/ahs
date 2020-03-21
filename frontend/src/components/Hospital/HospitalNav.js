import React, { Component } from "react";
import { Link } from "react-router-dom";

class HospitalNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/hospital/profile">
              Account <span className="sr-only">(current)</span>
            </Link>
            <li className="nav-item dropdown ">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                View
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  className="dropdown-item"
                  to="/hospital/viewPatientRecord"
                >
                  Patient Details
                </Link>
                <Link className="dropdown-item" to="#">
                  Doctor Details
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown ">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Add
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/hospital/addPatient">
                  New Patient
                </Link>
                <Link className="dropdown-item" to="/hospital/addDoctor">
                  New Doctor
                </Link>
              </div>
            </li>
            <Link
              className="nav-item nav-link active"
              to="/hospital/update_Record"
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

export default HospitalNav;
