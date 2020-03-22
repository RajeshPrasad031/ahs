import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LabsNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/lab/profile">
              Account <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link active" to="/lab/viewPatient">
              View Patient
            </Link>
            <Link className="nav-item nav-link active" to="/lab/updateRecord">
              Update Patient Record
            </Link>
            <Link className="nav-item nav-link active" to="/lab/updatePassword">
              Update Password
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
