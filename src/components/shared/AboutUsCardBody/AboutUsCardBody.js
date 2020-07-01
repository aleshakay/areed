import React from 'react';

import './AboutUsCardBody.scss';

class AboutUsCardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h2 className="aboutUsCardTitles">{this.props.title}</h2>
        <p className="body-quote">{this.props.quote}</p>
        <p className="body-content">{this.props.text1}</p>
        <p className="body-content">{this.props.text2}</p>
        <p className="body-content">{this.props.text3}</p>
      </div>
    );
  }
}

export default AboutUsCardBody;
