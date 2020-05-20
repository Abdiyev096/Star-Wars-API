import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import PlanetsPage from '../planets-page';
import StarshipsPage from '../starships-page';
import {SwapiServiceProvider} from '../swapi-service-context';
import {BrowserRouter, Route} from 'react-router-dom';

import './app.css';
import ErrorBoundry from '../error-boundry';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
    <ErrorBoundry>
      <SwapiServiceProvider value={this.swapiService}>
        <BrowserRouter>
          <div className="container">
            <Header />
            <RandomPlanet /> 

            <Route path="/" exact render={() => <h2>Welcome to Star DB</h2>} />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" component={StarshipsPage} />
          </div>
        </BrowserRouter>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
  }
};
