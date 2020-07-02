import React from 'react';
import AboutUsCardBody from '../AboutUsCardBody/AboutUsCardBody';
import AboutUsCardHeader from '../AboutUsCardHeader/AboutUsCardHeader';
import cup from '../../../assets/coffeecup.jpg';

import './AboutUsCard.scss';

class AboutUsCard extends React.Component {
  render() {
    return (
      <article className="card">
        <AboutUsCardHeader className="cupImg" image={cup} />
        <AboutUsCardBody title={'Alesha Reed'}
        quote={'It is never too late to be who you might have been - George Elliot'}
        text1={' My passion for technology started as an adoloscent when I received my first computer. I have been tinkering with technology in various forms since that day.\
         That passion led me to enroll at Middle Tennessee State University, where I graduated with a BA in Computer Information Systems. I did not immediately start my career in technology.\
          I worked several jobs to take care of my family. In 2013, I received my first job in the technology field.  The next few years were a bit harder than I expected, however, I was determined.'}
        text2={'I stilled contained the love that technology afforded me with seeing ideas come to fruition before my eyes and under my fingers tips.\
        I have continued to look for ways to nuture that love over the past couple years. Last summer, that search lead me to\
        enroll in a JumpStart program at Nashville Software School where I began the process of nuturing that love for technical. \
        I found a community of peers that shared that same love.  Months later, I enrolled in the Full Stack Web Development Bootcamp and here I am. I am growing and learning skills that as a young girl I dreamed about.  I am not where I want to be but I am enjoying my journey to that place.'}
        text3={'Outside of technology, I enjoy family time and photography. I take a great black and white photo, if I might so say myself. You can also find me doing any of the following equally important hobbies. Crafting, Traveling or Volunteering'} />
      </article>
    );
  }
}

export default AboutUsCard;
