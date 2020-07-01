import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import './HomeScreenJumbo.scss';

class HomeScreenJumbo extends React.Component {
  github(e) {
    window.location.href = 'https://github.com/aleshakay';
  }

  linkedId(e) {
    window.location.href = 'https://www.linkedin.com/in/alesha-reed/';
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-1">Alesha K Reed</h1>
            <p className="lead">Full Stack Software Developer</p>
            <Button className="contactbtn" outline color="secondary" size="md" onClick={this.github}>GitHub</Button>
            <Button className="contactbtn" outline color="secondary" size="md" onClick={this.linkedId}>LinkedIn</Button>
            <Button className="contactbtn" outline color="secondary" size="md">
              <a href="mailto:aleshak83@gmail.com">Email</a>
            </Button>
            <Button className="coverbtn" outline color="secondary" size="md">Blog</Button>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default HomeScreenJumbo;
