import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import './ContactInfo.scss';

class ContactInfo extends React.Component {
  github() {
    window.location.href = 'https://github.com/aleshakay';
  }

  linkedId() {
    window.location.href = 'https://www.linkedin.com/in/alesha-reed/';
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="contactInfoDescription">Find me at... </h1>
            <Button className="contactbtn" outline color="secondary" size="md" onClick={this.github}>GitHub</Button>
            <Button className="contactbtn" outline color="secondary" size="md" onClick={this.linkedId}>LinkedIn</Button>
            <Button className="contactbtn" outline color="secondary" size="md">
              <a href="mailto:aleshak83@gmail.com">Email</a>
            </Button>
            <Button className="contactbtn" outline color="secondary" size="md">Blog</Button>
            <Button className="contactbtn" outline color="secondary" size="md">Resume</Button>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
export default ContactInfo;
