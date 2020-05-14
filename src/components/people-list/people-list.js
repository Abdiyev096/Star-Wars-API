import React, {Component} from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';


export default class PeopleList extends Component {
    state = {
        personId: null,
        hasError: null
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onPersonClick = (id) => {
        this.setState({
            personId: id
        })
    }

    render() {

        if(this.state.hasError) {
            return (
                <ErrorIndicator />
            );
        }

        return (
        <div className="row mb2">
            <div className="col-md-6">
                <ItemList onPersonClick={this.onPersonClick} />
            </div>
            <div className="col-md-6">
                <PersonDetails personId={this.state.personId} />
            </div>
        </div>
        )
    }
}