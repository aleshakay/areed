import React from 'react';
import { Container, Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';
import './About.scss';
import areed from '../../../assets/areed.jpeg';

class About extends React.Component {
  render() {
    return (
      <div className="About">
      <Container className="AboutContainer">
        <CardTitle className="AboutUsCardTitle"><h1>About Yours Truely</h1></CardTitle>
          <Card className="AbtCard" >
            <CardBody className="aboutuscardbody">
            <div className="col-md-6">
            <CardImg className="aboutpic" bottom width="50%" height="50%"src={areed} alt="Card image cap" />
            </div>
            <div className="col-md-6">
              <CardTitle className="aboutUsCardName"><h1>Alesha Reed</h1></CardTitle>
              <CardText className="Passions">
                <h5 className="AboutGrowthQuote">It is never too late to be who you might have been - George Elliot </h5>
                <p>My passion for technology started as an adoloscent when I received my first computer. I have been tinkering with technology in various forms since that day. That passion led me to enroll at Middle Tennessee State University, where I graduated with a BA in Computer Information Systems.</p>
                <p>I love the idea of seeing an idea forming before my eyes and under my fingers tips.
                I have continued to look for ways to nuture that love over the past couple years. Last summer, I enrolled in a JumpStart program at Nashville Software School where I began the process of nuturing that love for technical. I found a community of peers that shared that same love.  Months later I enrolled in the Full Stack Web Development Bootcamp and here I am.</p>
                <p>Outside of technology, I have enjoyed photography. I take a great black and white photo, if I might so say myself. You can also find me doing any of the following equally important hobbies.</p>
              </CardText>
            </div>
            </CardBody>
          </Card>
      </Container>
      </div>
    );
  }
}

export default About;
