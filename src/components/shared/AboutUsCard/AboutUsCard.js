import React from 'react';
import AboutUsCardBody from '../AboutUsCardBody/AboutUsCardBody';
import AboutUsCardHeader from '../AboutUsCardHeader/AboutUsCardHeader';
import areed from '../../../assets/areed.jpeg';

class AboutUsCard extends React.Component {
  render() {
    return (
      <article className="card">
        <AboutUsCardHeader className="areedImg" image={areed}/>
        <AboutUsCardBody title={'Alesha Reed'}
        quote={'It is never too late to be who you might have been - George Elliot'}
        text1={' My passion for technology started as an adoloscent when I received my first computer. I have been tinkering with technology in various forms since that day. That passion led me to enroll at Middle Tennessee State University, where I graduated with a BA in Computer Information Systems.'}
        text2={'I love the idea of seeing an idea forming before my eyes and under my fingers tips.\
        I have continued to look for ways to nuture that love over the past couple years. Last summer,\
        I enrolled in a JumpStart program at Nashville Software School where I began the process of nuturing that love for technical. \
        I found a community of peers that shared that same love.  Months later I enrolled in the Full Stack Web Development Bootcamp and here I am.'}
        text3={'Outside of technology, I have enjoyed photography. I take a great black and white photo, if I might so say myself. You can also find me doing any of the following equally important hobbies.'} />
      </article>
    );
  }
}

export default AboutUsCard;
