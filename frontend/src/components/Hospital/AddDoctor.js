import React, { Component } from "react";
import Navbar from "./HospitalNav";
import "./hospital.css";

class AddDoctor extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <form
          name="form1"
          onsubmit="return validateForm()"
          method="post"
          align="center"
        >
          <table cellspacing="15" align="center">
            <tr>
              <td>
                <input
                  type="text"
                  name="Hid"
                  maxlength="40"
                  className="cell"
                  placeholder="Enter Hospital Account Address"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="HPKey"
                  className="cell"
                  placeholder="Enter Hospital Private key"
                />
              </td>
            </tr>

            <label for="Doctor Detail">Doctor Detail</label>

            <tr>
              <td>
                <input
                  type="text"
                  name="Dname"
                  className="cell"
                  placeholder=" Name "
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="Phone"
                  maxlength="10"
                  className="cell"
                  placeholder=" Age "
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="email"
                  name="email"
                  className="cell"
                  placeholder=" Email"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="department"
                  className="cell"
                  placeholder=" Department "
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="degree"
                  className="cell"
                  placeholder=" Qualification "
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="experience"
                  row="2"
                  className="cell"
                  placeholder=" Experience "
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="aadhar"
                  className="cell"
                  placeholder="Aadhar number"
                />
              </td>
            </tr>
            <tr>
              <td align="center">
                <button
                  type="submit"
                  id="loginnow"
                  value="submit"
                  className=" btn btn-primary Button"
                >
                  <span id="submit_button">Submit</span>
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default AddDoctor;
