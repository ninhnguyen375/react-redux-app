import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class ProjectDetails extends Component {
  render() {
    if (this.props.auth.isEmpty) {
      return <Redirect to="/signin" />;
    }
    const { project } = this.props;
    if (project) {
      return (
        <div className="container section project-details z-depth-2">
          <div className="card z-depth-0">
            <div className="card-content">
              <div className="card-title">{project.title}</div>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Post by {project.authorFirstName} {project.authorLastName}
              </div>
              <div>{project.createAt}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="loading-container">
          <img
            className="loading-image"
            alt="loading..."
            src="/image/Wedges-3s-200px.svg"
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { projects } = state.firestore.data;
  const project = projects ? projects[id] : null;
  return {
    project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
