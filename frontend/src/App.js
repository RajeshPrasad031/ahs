import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Doctor from "./components/Doctor";
import ViewPatient from "./components/PatientHomepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Homepage} />
        <div>
          <Route exact path="/Doctor" component={Doctor} />
        </div>
        <Route exact path="/viewPatient" component={ViewPatient} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
