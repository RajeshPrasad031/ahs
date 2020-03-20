import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Homepage from "./components/Homepage.js";
import DoctorHomepage from "./components/DoctorHomepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Doctor" component={DoctorHomepage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
