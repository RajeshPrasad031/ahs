import React, { Component } from "react";
import { Link } from "react-router-dom";

class PatientHomepage extends Component {
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
                to="/doctor/viewPatient"
              >
                View Record
              </Link>
              <Link className="nav-item nav-link active" to="/">
                Claim Insurance
              </Link>
              <Link
                className="nav-item nav-link active"
                to="/patient/updateKey"
              >
                Update Keys
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

export default PatientHomepage;
