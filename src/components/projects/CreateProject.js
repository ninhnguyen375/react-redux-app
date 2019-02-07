import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  activeLoading() {
    this.setState({ isLoading: true });
  }
  disableLoading() {
    this.setState({ isLoading: false });
  }
  state = {
    title: "",
    content: "",
    isLoading: false
  };
  async handleSubmit(e) {
    this.activeLoading();
    e.preventDefault();
    await this.props.createProject(this.state);
    this.disableLoading();
    this.props.history.push("/");
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  render() {
    if (this.props.auth.isEmpty) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container ">
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="white z-depth-2"
        >
          <h5 className="grey-text darken-3">Create New Project</h5>
          {/* input title */}
          <div className="input-field">
            <label htmlFor="title">Project Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          {/* input project content */}
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              className="materialize-textarea"
              name="content"
              id="content"
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          {/* submit */}
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
                Create
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
    projectError: state.project.projectError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
