import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import M from "materialize-css/dist/js/materialize.min.js";

class SignedInLinks extends Component {
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
    const { signOut, profile } = this.props;
    return (
      <>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="#" className="cursor-pointer" onClick={signOut}>
              Log Out
            </NavLink>
          </li>
          <li>
            <NavLink to="/create">New Project</NavLink>
          </li>
          <li>
            <NavLink to="/" className="btn pink lighten-1">
              {profile.initials}
            </NavLink>
          </li>
        </ul>
        {/* navbar for mobile */}
        <ul
          className={this.state.isDisplay ? "sidenav" : "sidenav hidden"}
          id="mobile-demo"
        >
          <li>
            <NavLink to="#" className="cursor-pointer" onClick={signOut}>
              Log Out
            </NavLink>
          </li>
          <li>
            <NavLink to="/create" onClick={this.hiddenSidebar.bind(this)}>
              New Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="btn pink lighten-1">
              {profile.initials}
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInLinks);
