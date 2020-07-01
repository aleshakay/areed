import React from 'react';
import './About.scss';
import AboutUsCard from '../../shared/AboutUsCard/AboutUsCard';

class About extends React.Component {
  render() {
    return (
      <div className="About">
      <AboutUsCard />
      </div>
    );
  }
}

export default About;
