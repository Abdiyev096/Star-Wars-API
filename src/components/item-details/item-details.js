import React, { Component } from 'react';

import Spinner from '../spinner'
import './item-details.css';

const Record = ({item, field, label}) => {

  return (
    <li className="list-group-item">
              <span className="term">{label}</span>
              <span> {item[field]} </span>
            </li>
  )
}

export {Record}

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: true,
    image: null
  }


  getItem = () => {
    const {getData, itemId, getImageUrl} = this.props;

    if(!itemId) {
      return
    }

    this.setState({
      loading: true
    })

    getData(itemId)
          .then(item => {
            this.setState({
              item,
              loading: false,
              image: getImageUrl(item)
            })
          })

  }

  componentDidMount() {
    this.getItem();
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
      this.getItem();
    }
  }

  render() {

    const {item, loading, image} = this.state;

    if(!item) {
      return <span>Select a person from a list</span>
    }

    if(loading) {
      return <Spinner />;
    }

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image}
          alt="..." />

        <div className="card-body">
          <h4> {item.name} </h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
