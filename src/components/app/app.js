import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import PlanetsPage from '../planets-page';
import StarshipsPage from '../starships-page';
import {SwapiServiceProvider} from '../swapi-service-context';

import './app.css';
import ErrorBoundry from '../error-boundry';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
    <ErrorBoundry>
      <SwapiServiceProvider value={this.swapiService}>
        <div className="container">
          <Header />
          <RandomPlanet /> 
          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </div>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
  }
};
