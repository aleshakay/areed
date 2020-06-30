import React from 'react';
import {
  Card, Button, CardTitle, CardText, Row, Col,
} from 'reactstrap';
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
      <Row>
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </Row>
      </div>
    );
  }
}

export default Porfolio;
