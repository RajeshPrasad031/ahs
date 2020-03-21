import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Doctor from "./components/Doctor/Doctor";
import DoctorIndex from "./components/Doctor/DoctorHomepage";
import ViewPatient from "./components/Doctor/ViewPatient";
import Profile from "./components/Doctor/DoctorProfile";
import AddPatientDoc from "./components/Doctor/AddPatient";
import UpdateRecordDoc from "./components/Doctor/UpdateRecord";
import Patient from "./components/Patient/Patient";
import PatientUpdateKey from "./components/Patient/UpdateKey";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/doctor" component={Doctor} />
        <Route exact path="/doctor/index" component={DoctorIndex} />
        <Route exact path="/doctor/profile" component={Profile} />
        <Route exact path="/doctor/view_patient" component={ViewPatient} />
        <Route exact path="/doctor/add_patient" component={AddPatientDoc} />
        <Route exact path="/doctor/update_record" component={UpdateRecordDoc} />
        <Route exact path="/patient" component={Patient} />
        <Route exact path="/patient/updateKey" component={PatientUpdateKey} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
