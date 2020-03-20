import React, { Component } from "react";
import "./doctor.css";
export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">
              Enter Your Email-id or Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Enter Your Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" to="/" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
