import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

import './ContactInfo.scss';

const ContactInfo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="contactInfoDescription">Find me at... </h1>
          <Button className="contactbtn" outline color="secondary" size="md">GitHub</Button>
          <Button className="contactbtn" outline color="secondary" size="md">LinkedIn</Button>
          <Button className="contactbtn" outline color="secondary" size="md">Email</Button>
          <Button className="contactbtn" outline color="secondary" size="md">Blog</Button>
          <Button className="contactbtn" outline color="secondary" size="md">Resume</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ContactInfo;
