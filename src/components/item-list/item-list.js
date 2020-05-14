import React, { Component } from 'react';

import './item-list.css';

import Spinner from '../spinner/';
import SwapiService from '../../services/swapi-service';

export default class ItemList extends Component {

  state = {
    persons: [],
    loading: true
  }

  swapiService = new SwapiService();

  componentDidMount() {
    this.swapiService.getAllPeople()
                      .then(persons => {
                        this.setState({
                          persons,
                          loading: false
                        })
                      })
  }

  render() {

    const {persons, loading} = this.state;
    const {onPersonClick} = this.props;

    const itemList = persons.map(item => {
      return (
        <li className="list-group-item"
            key={item.id}
            onClick={() => onPersonClick(item.id)}>
          {item.name}
        </li>
      )
    })

    const elements = loading ? <Spinner /> : itemList;

    return (
      <ul className="item-list list-group">
       {elements}
      </ul>
    );
  }
}
