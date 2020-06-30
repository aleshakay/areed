import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,
} from 'reactstrap';

import './ProjectCard.scss';

class TechnologyCard extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div>
      <Card>
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <CardSubtitle>{project.techologiesUsed}</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card project cap" />
        <CardBody>
          <CardText>{project.description}</CardText>
          <CardLink href="#">{project.url}</CardLink>
          <CardLink href="#">{project.github}</CardLink>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default TechnologyCard;
