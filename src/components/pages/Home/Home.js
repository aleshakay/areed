import React from 'react';

import HomeScreenJumbo from '../../shared/HomeScreenJumbo/HomeScreenJumbo';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <HomeScreenJumbo />
      </div>
    );
  }
}

export default Home;
