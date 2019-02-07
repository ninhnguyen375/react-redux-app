import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  activeLoading() {
    this.setState({ isLoading: true });
  }
  disableLoading() {
    this.setState({ isLoading: false });
  }
  state = {
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    isLoading: false
  };
  async handleSubmit(e) {
    this.activeLoading();
    e.preventDefault();
    await this.props.signUp(this.state);
    this.disableLoading();
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  render() {
    if (!this.props.auth.isEmpty) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container ">
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="white z-depth-2"
        >
          <div className="red-text center">
            {this.props.signupError ? (
              <p>{this.props.signupError.message}</p>
            ) : null}
          </div>
          <h5 className="grey-text darken-3">Sign Up</h5>
          {/* Input Email */}
          <div className="input-field">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange.bind(this)}
              value={this.state.email}
            />
          </div>
          {/* Input First Name */}
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={this.handleChange.bind(this)}
              value={this.state.firstName}
            />
          </div>
          {/* Input Last Name */}
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={this.handleChange.bind(this)}
              value={this.state.lastName}
            />
          </div>
          {/* Input Password */}
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          {/* Submit Button */}
          <div className="input-field">
            {this.state.isLoading ? (
              <button type="button" className="btn pink lighten-1 z-depth-0">
                <img
                  className="loading-image-sm"
                  alt="loading..."
                  src="/image/Rolling-1s-200px.svg"
                />
              </button>
            ) : (
              <button type="submit" className="btn pink lighten-1 z-depth-0">
                Sign Up
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    signupError: state.auth.signupError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
