import React from 'react';
import './AboutUsCardHeader.scss';

class AboutUsCardHeader extends React.Component {
  render() {
    const { image } = this.props;
    const style = {
      // eslint-disable-next-line prefer-template
      backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
      </header>
    );
  }
}

export default AboutUsCardHeader;
