import React, { Component } from "react";
import Navbar from "./DoctorNavbar";

class UpdateRecord extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      patient_key: "",
      patient_email: "",
      healthRecord: ""
    };
  }
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <form>
            <div className="form-group">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Your Address"
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                value={this.state.password}
              />
            </div>
            <div className="form-group">
              <input
                name="patient_email"
                type="email"
                className="form-control"
                placeholder="Enter Patient Email"
                value={this.state.patient_email}
              />
            </div>
            <div className="form-group">
              <input
                name="patient_key"
                type="password"
                className="form-control"
                placeholder="Enter Patient Public Key"
                value={this.state.patient_key}
              />
            </div>
            <label for="New Health Record">Enter New Health Record</label>
            <input
              name="healthRecord"
              type="file"
              className="form-control"
              value={this.state.record}
            />
            <div className="Button">
              <button type="submit" to="/" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateRecord;
