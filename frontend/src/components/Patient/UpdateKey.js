import React, { Component } from "react";
import "./patient.css";
import Navbar from "./PatientNav";

class UpdateKey extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirm_password: ""
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="loginForm">
          <form>
            <div className="form-group">
              <label for="Email1">Enter Your Email-id or Address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                value={this.state.email}
              />
            </div>
            <div class="form-group">
              <label for="Password">Enter New Password to Generate Keys</label>
              <input
                name="password"
                type="password"
                className="form-control"
                value={this.state.password}
              />
            </div>
            <div class="form-group">
              <label for="Password">Confirm Your Password </label>
              <input
                name="confirm_password"
                type="password"
                className="form-control"
                value={this.state.confirm_password}
              />
            </div>

            <button type="submit" to="/" className="btn btn-primary Button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateKey;
