import React, { Component } from "react";

export default class ProjectSummary extends Component {
  state = {
    isHovered: false
  };
  handleMouseOver() {
    this.setState({ isHovered: true });
  }
  handleMouseLeave() {
    this.setState({ isHovered: false });
  }
  render() {
    const { project } = this.props;
    return (
      <div
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        className={
          this.state.isHovered
            ? "card z-depth-2 project-summary"
            : "card z-depth-0 project-summary"
        }
      >
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>{`Post by ${project.authorFirstName}`}</p>
          <p className="grey-text">{project.createAt}</p>
        </div>
      </div>
    );
  }
}
