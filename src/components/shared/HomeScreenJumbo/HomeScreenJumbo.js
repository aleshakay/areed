import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import './HomeScreenJumbo.scss';

const HomeScreenJumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-1">Alesha K Reed</h1>
          <p className="lead">Full Stack Software Developer</p>
          <Button className="coverbtn" outline color="secondary" size="md">GitHub</Button>
          <Button className="coverbtn" outline color="secondary" size="md">LinkedIn</Button>
          <Button className="coverbtn" outline color="secondary" size="md">Email</Button>
          <Button className="coverbtn" outline color="secondary" size="md">Blog</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeScreenJumbo;
