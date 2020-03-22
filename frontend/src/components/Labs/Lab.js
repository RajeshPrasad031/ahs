import React, { Component } from "react";

class Lab extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
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
            <label for="Password">Enter Your Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={this.state.password}
            />
          </div>

          <button type="submit" to="/" className="btn btn-primary Button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Lab;
