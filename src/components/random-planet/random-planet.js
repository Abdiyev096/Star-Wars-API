/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator/';

export default class RandomPlanet extends Component {

  state = {
    planet: {},
    loading: true,
    error: false
  }

  swapiService = new SwapiService();

  idInterval = null;

  componentDidMount() {
    this.randomChangePlanet();
    this.idInterval = setInterval(() => {
      this.randomChangePlanet();
    }, 8000);
  }

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  }

  randomChangePlanet() {
    const id = Math.floor((Math.random() * 18) + 2);
    this.swapiService.getPlanet(id)
          .then(this.onPlanetLoaded)
          .catch(this.onError);
  }

  render() {

    const {planet, loading, error} = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({planet}) => {

  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4> {name} </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span> {population} </span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span> {rotationPeriod} </span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span> {diameter} </span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
}
