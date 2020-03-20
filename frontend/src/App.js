import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Doctor from "./components/Doctor/Doctor";
import Patient from "./components/Patient/Patient";
import ViewPatient from "./components/Doctor/ViewPatient";
import Profile from "./components/Doctor/DoctorProfile";
import AddPatientDoc from "./components/Doctor/AddPatient";
import UpdateRecordDoc from "./components/Doctor/UpdateRecord";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Homepage} />
        <div>
          <Route exact path="/doctor" component={Doctor} />
        </div>
        <Route exact path="/patient" component={Patient} />
        <Route exact path="/doctor/profile" component={Profile} />
        <Route exact path="/doctor/view_patient" component={ViewPatient} />
        <Route exact path="/doctor/add_patient" component={AddPatientDoc} />
        <Route exact path="/doctor/update_record" component={UpdateRecordDoc} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
