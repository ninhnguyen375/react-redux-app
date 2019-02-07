import React, { Component } from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <div className="project-list section">
          {projects &&
            projects.map(project => (
              <Link to={`/project/${project.id}`} key={project.id}>
                <ProjectSummary project={project} />
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default ProjectList;
