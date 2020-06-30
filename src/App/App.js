import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
}
  from 'react-router-dom';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connection';

import NavBar from '../components/shared/NavBar/NavBar';
import Home from '../components/pages/Home/Home';
import Contact from '../components/pages/Contact/Contact';
import About from '../components/pages/About/About';
import Technologies from '../components/pages/Technologies/Technologies';
import Porfolio from '../components/pages/Porfolio/Porfolio';
import './App.scss';


firebaseConnection();


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };


class App extends React.Component {
  state = {
    authed: false,
  };

  // componentDidMount() {
  //   this.removeListner = firebase.auth().onAuthStateChanged((userObj) => {
  //     if (userObj) {
  //       this.setState({ authed: true, userObj });
  //     } else {
  //       this.setState({ authed: false });
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   this.removeListener();
  // }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
            <NavBar auth={authed}/>
            <Switch>
              <PublicRoute path="/" exact component={Home} authed={authed}/>
              <PublicRoute path="/Contact" exact component={Contact} authed={authed}/>
              <PublicRoute path="/About" exact component={About} authed={authed}/>
              <PublicRoute path="/Technologies" exact component={Technologies} authed={authed}/>
              <PublicRoute path="/Porfolio" exact component={Porfolio} authed={authed} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
