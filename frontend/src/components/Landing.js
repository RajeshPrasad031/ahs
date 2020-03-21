import React, { Component } from "react";
import "./all.css";
import Doctor from "./images/doctor.png";
import Patient from "./images/patients.png";
import Hospital from "./images/hospital.png";
import Pharmacy from "./images/pharma.png";
import Lab from "./images/lab.png";
import Health from "./images/health_organizer.png";
import Insurance from "./images/insurance_company.png";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h6>Login As</h6>
        <div>
          <Link to="/doctor">
            <img src={Doctor} className="ib" alt="Doctor" />
          </Link>
          <Link to="/patient">
            <img src={Patient} className="ib" alt="Patient" />
          </Link>
        </div>

        <div>
          <Link to="/hospital">
            <img src={Hospital} className="ib" alt="Hospital" />
          </Link>
          <Link to="/pharmacy">
            <img src={Pharmacy} className="ib" alt="Pharmacyt" />
          </Link>
          <Link to="/lab">
            <img src={Lab} className="ib" alt="Lab" />
          </Link>
        </div>

        <div>
          <Link to="/health_Organizer">
            <img src={Health} className="ib" alt="Health Organizaton" />
          </Link>
          <Link to="/insurance">
            <img src={Insurance} className="ib" alt="Insuramnce Company" />
          </Link>
        </div>
      </div>
    );
  }
}
export default Homepage;
