/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/';

export default class RandomPlanet extends Component {

  constructor() {
    super();
    this.randomChangePlanet();
  }

  state = {
    planet: {},
    loading: true
  }

  swapiService = new SwapiService();

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  }

  randomChangePlanet() {
    const id = Math.floor((Math.random() * 18)) + 2;
    this.swapiService.getPlanet(id)
          .then(this.onPlanetLoaded)
  }

  render() {

    const {planet, loading} = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = loading ? null : <PlanetView planet={planet} />;

    return (
      <div className="random-planet jumbotron rounded">
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
