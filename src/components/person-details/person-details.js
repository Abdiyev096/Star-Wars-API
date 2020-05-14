import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner/'
import './person-details.css';

export default class PersonDetails extends Component {

  state = {
    person: null,
    loading: true
  }

  swapiService = new SwapiService();

  getPerson = () => {
    const {personId} = this.props;

    if(!personId) {
      return
    }

    this.setState({
      loading: true
    })

    this.swapiService.getPerson(personId)
                      .then(person => {
                        this.setState({
                          person,
                          loading: false
                        })
                      })

  }

  componentDidMount() {
    this.getPerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.getPerson();
    }
  }

  render() {

    const {person, loading} = this.state;

    if(!person) {
      return <span>Select a person from a list</span>
    }

    if(loading) {
      return <Spinner />;
    }

    const imgUrl = `https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={imgUrl}
          alt="person" />

        <div className="card-body">
          <h4> {person.name} </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span> {person.gender} </span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span> {person.birthYear} </span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span> {person.eyeColor} </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
