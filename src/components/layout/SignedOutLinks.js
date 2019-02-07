import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

export default class SignedOutLinks extends Component {
  state = {
    isDisplay: true
  };
  hiddenSidebar() {
    this.setState({ isDisplay: false });
    window.document.getElementsByClassName("sidenav-overlay")[0].style.display =
      "none";
    this.setState({ isDisplay: true });
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {
      edge: "left",
      inDuration: 250
    });
  }
  render() {
    return (
      <>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/signin">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
        <ul
          className={this.state.isDisplay ? "sidenav" : "sidenav hidden"}
          id="mobile-demo"
        >
          <li>
            <NavLink onClick={this.hiddenSidebar.bind(this)} to="/signin">
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink onClick={this.hiddenSidebar.bind(this)} to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}
