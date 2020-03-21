import React, { Component } from "react";

export default class UpdatePassword extends Component {
  constructor() {
    super();
    this.state = {
      new_password: "",
      confirm_password: ""
    };
  }

  render() {
    return (
      <div className="loginForm">
        <form>
          <div className="form-group">
            <label for="Email1">Enter new Password</label>
            <input
              name="new_password"
              type="password"
              className="form-control"
              value={this.state.email}
            />
          </div>
          <div class="form-group">
            <label for="Password">Confirm Your Password</label>
            <input
              name="confirm_password"
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
