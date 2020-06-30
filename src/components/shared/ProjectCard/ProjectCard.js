import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink, Col,
  CardTitle, CardSubtitle,
} from 'reactstrap';

import './ProjectCard.scss';

class TechnologyCard extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div >
        <Col sm="6">
          <Card>
          <CardBody>
            <CardTitle>{project.title}</CardTitle>
            <CardSubtitle>{project.techologiesUsed}</CardSubtitle>
          </CardBody>
          <img width="100%" src={project.screenshot} alt="Card project cap" />
          <CardBody>
            <CardText>{project.description}</CardText>
            <CardLink href="#">{project.url}</CardLink>
            <CardLink href="#">{project.github}</CardLink>
          </CardBody>
        </Card>
      </Col>
    </div>
    );
  }
}

export default TechnologyCard;
