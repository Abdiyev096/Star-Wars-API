import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator/';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeopleList from '../people-list';

import './app.css';

export default class App extends Component {

  state = {
    hasError: false
  }

  swapiService = new SwapiService();

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
    <div className="container">
      <Header />
      <RandomPlanet />
      <PeopleList />
      
    </div>
  );
  }
};
