import React, { Component } from "react";
import { Link } from "react-router-dom";

class PharmacyNav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="#">
                Account <span className="sr-only">(current)</span>
              </Link>
              <Link
                className="nav-item nav-link active"
                to="/pharmacy/viewPatientRecord"
              >
                View Patient Record
              </Link>
              <Link
                className="nav-item nav-link active"
                to="/pharmacy/updatePassword"
              >
                Update Password
              </Link>
              <Link className="nav-item nav-link active" to="/">
                Log Out
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default PharmacyNav;
