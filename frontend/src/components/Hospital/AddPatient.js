import React, { Component } from "react";
import Navbar from "./HospitalNav";
import "./hospital.css";

class AddPatient extends Component {
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
                  name="Dname"
                  maxlength="40"
                  className="cell"
                  placeholder="Doctor Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="Dpass"
                  className="cell"
                  placeholder="Doctor Password"
                />
              </td>
            </tr>

            <label for="Patient Detail">Patient Detail</label>

            <tr>
              <td>
                <input
                  type="text"
                  name="Pname"
                  className="cell"
                  placeholder=" Name "
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="Age"
                  maxlength="2"
                  className="cell"
                  placeholder=" Age"
                />
              </td>
            </tr>
            <tr>
              <td>
                <span id="bd1">Gender</span>
                <input type="radio" name="opt1" id="btn1" value="m" />
                Male
                <input type="radio" name="opt1" id="btn2" value="f" />
                Female
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="mobno"
                  maxLength="10"
                  className="cell"
                  placeholder=" Contact No."
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="email"
                  name="email"
                  className="cell"
                  placeholder=" Email "
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="textarea"
                  name="addr"
                  row="2"
                  className="cell"
                  placeholder=" Address"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="BloodGroup"
                  className="cell"
                  placeholder=" BloodGroup "
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="aadhar"
                  className="cell"
                  placeholder=" Aadhar number"
                />
              </td>
            </tr>
            <tr>
              <td align="center">
                <button
                  type="submit"
                  id="loginnow"
                  value="submit"
                  className="btn btn-primary Button"
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

export default AddPatient;
