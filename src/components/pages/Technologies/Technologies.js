import React from 'react';
import {
  Row, Container,
} from 'reactstrap';
import technologyData from '../../../helpers/data/technologyData';
import './Technologies.scss';
import TechnologyList from '../../shared/TechnologyList/TechnologyList';

class Technologies extends React.Component {
  state = {
    technologies: [],
  }

  getTechnologies = () => {
    technologyData.getTechnologies()
      .then((technologies) => this.setState({ technologies }))
      .catch((error) => console.error('error in the technologies', error));
  };

  componentDidMount() {
    this.getTechnologies();
  }

  render() {
    const { technologies } = this.state;
    return (
      <div className="Technologies">
        <Container>
          <Row className="TechnologyListGroup">
          <h1>Here are a few technologies I've been working with recently: </h1>
            <ul horizontal>
              {technologies.map((technology) => <TechnologyList key={technology.id} technology={technology} />)}
            </ul>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Technologies;
