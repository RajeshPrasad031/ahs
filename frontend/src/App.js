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
import PatientIndex from "./components/Patient/PatientHomepage";
import PatientUpdateKey from "./components/Patient/UpdateKey";

import Hospital from "./components/Hospital/Hospital";
import HospitalIndex from "./components/Hospital/HospitalHomepage";
import UpdateRecordHosp from "./components/Hospital/UpdateRecord";
import AddPatientHosp from "./components/Hospital/AddPatient";
import AddDoctorHosp from "./components/Hospital/AddDoctor";
import ViewPatientRecord from "./components/Hospital/ViewPatient";

import Pharmacy from "./components/Pharmacy/Pharmacy";
import PharmacyIndex from "./components/Pharmacy/PharmacyHomepage";
import ViewPatientPharma from "./components/Pharmacy/ViewPatient";

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
        <Route exact path="/patient/index" component={PatientIndex} />
        <Route exact path="/patient/updateKey" component={PatientUpdateKey} />

        <Route exact path="/hospital" component={Hospital} />
        <Route exact path="/hospital/index" component={HospitalIndex} />
        <Route
          Exact
          path="/hospital/viewPatientRecord"
          component={ViewPatientRecord}
        />
        <Route
          exact
          path="/hospital/update_Record"
          component={UpdateRecordHosp}
        />
        <Route exact path="/hospital/addPatient" component={AddPatientHosp} />
        <Route exact path="/hospital/addDoctor" component={AddDoctorHosp} />

        <Route exact path="/pharmacy" component={Pharmacy} />
        <Route exact path="/pharmacy/index" component={PharmacyIndex} />
        <Route
          exact
          path="/pharmacy/viewPatientRecord"
          component={ViewPatientPharma}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
