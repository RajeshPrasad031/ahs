import React, { Component } from "react";
import Navbar from "./HospitalNav";

class ViewPatient extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">
              Enter Patient Address/Email-id
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Enter Patient Public Key</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary Button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ViewPatient;
