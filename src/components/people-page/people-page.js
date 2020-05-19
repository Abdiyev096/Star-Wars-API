import React, {Component} from 'react';

import {PersonsList} from '../sw-components/item-lists';
import {PersonDetails} from '../sw-components/details';
import Row from '../row';
import ErrorBoundry from '../error-boundry';


export default class PeoplePage extends Component {
    state = {
        itemId: null,
    }

    onItemClick = (id) => {
        this.setState({
            itemId: id
        })
    }

    render() {

        const items = <PersonsList onItemClick={this.onItemClick} />
        
        const details = <PersonDetails itemId={this.state.itemId} />

        return (
            <ErrorBoundry>
                <Row left={items} right={details} />
            </ErrorBoundry>
        )
    }
}