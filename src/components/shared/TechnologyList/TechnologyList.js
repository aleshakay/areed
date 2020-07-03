import React from 'react';

import './TechnologyList.scss';

class TechnologyList extends React.Component {
  render() {
    const { technology } = this.props;
    return (
      <li className="TechnologyListItem">{technology.name}</li>
    );
  }
}

export default TechnologyList;
