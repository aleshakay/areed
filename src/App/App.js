import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
}
  from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connection';

import Auth from '../components/pages/Auth/Auth';
import NavBar from '../components/shared/NavBar/NavBar';
import Home from '../components/pages/Home/Home';
import Contact from '../components/pages/Contact/Contact';
import './App.scss';


firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
    userObj: '',
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

  render() {
    // const { authed, userObj } = this.state;
    return (
      <div className="App">
        <Router>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Contact" exact component={Contact} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
