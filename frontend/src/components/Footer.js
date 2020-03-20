import React, { Component } from "react";
import "./homepage.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white card-footer">
        Copyright &copy; {new Date().getFullYear()} Health Block
      </footer>
    );
  }
}
