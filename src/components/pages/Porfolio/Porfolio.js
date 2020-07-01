import React from 'react';
import {
  CardGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';

import ProjectCard from '../../shared/ProjectCard/ProjectCard';
import projectData from '../../../helpers/data/ProjectData';

import './Porfolio.scss';

class Porfolio extends React.Component {
  state = {
    projects: [],
  }

  static propTypes = {
    Container: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
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
        <CardGroup>
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </CardGroup>
      </div>
    );
  }
}

export default Porfolio;
