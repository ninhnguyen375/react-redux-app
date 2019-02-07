import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  activeLoading() {
    this.setState({ isLoading: true });
  }
  disableLoading() {
    this.setState({ isLoading: false });
  }
  state = {
    email: "",
    password: "",
    isLoading: false
  };
  async handleSubmit(e) {
    this.activeLoading();
    e.preventDefault();
    await this.props.signIn(this.state);
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
      <>
        <div className="container">
          <form
            onSubmit={this.handleSubmit.bind(this)}
            className="white z-depth-2"
          >
            <h5 className="grey-text darken-3">Sign In</h5>
            <div className="red-text center">
              {this.props.authError ? (
                <p>{this.props.authError.message}</p>
              ) : null}
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={this.handleChange.bind(this)}
              />
            </div>
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
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchtoProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(SignIn);
