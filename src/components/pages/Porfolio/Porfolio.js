import React from 'react';
import ProjectCard from '../../shared/ProjectCard/ProjectCard';
import projectData from '../../../helpers/data/ProjectData';

import './Porfolio.scss';

class Porfolio extends React.Component {
  state = {
    projects: [],
  }

  getProjects = () => {
    projectData.getProjects()
      .then((projects) => this.setState({ projects }))
      .catch((error) => console.error('error in the projects', error));
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="Porfolio">
      <h1 className="porfolioPageTitle">It's Just the Beginning...</h1>
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    );
  }
}

export default Porfolio;
