import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

class Navbar extends Component {
  componentDidUpdate() {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {
      edge: "left",
      inDuration: 250
    });
    window.document.getElementsByClassName("sidenav-overlay")[0].style.display =
      "none";
  }
  render() {
    const { auth } = this.props;
    return (
      <>
        <nav className="nav-wrapper grey darken-3">
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            Menu
          </Link>

          <div className="container">
            <Link to="/" className="brand-logo">
              NinhPlan
            </Link>
            {auth.isEmpty ? <SignedOutLinks /> : <SignedInLinks />}
          </div>
        </nav>
      </>
    );
  }
}

const mappStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};
export default connect(mappStateToProps)(Navbar);
