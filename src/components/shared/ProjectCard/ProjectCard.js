import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink, Button, Col,
  CardTitle, CardSubtitle,
} from 'reactstrap';

import './ProjectCard.scss';

class TechnologyCard extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div >
      <Col xs="4">
        <Card className="ProjectCards">
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <CardSubtitle>{project.techologiesUsed}</CardSubtitle>
        </CardBody>
        <img className="ProjectImage" width="100%" src={project.screenshot} alt="Card project cap" />
        <CardBody>
          <CardText className="ProjectDescription">{project.description}</CardText>
          <CardLink href={project.url}>Visit Site</CardLink>
          <CardLink href={project.github}>Visit Code</CardLink>
        </CardBody>
        </Card>
        </Col>
    </div>
    );
  }
}

export default TechnologyCard;
