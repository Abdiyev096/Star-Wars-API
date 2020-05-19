import React, {Component} from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { StarshipDetails } from '../sw-components/details';
import { StarshipList } from '../sw-components/item-lists';


export default class StarshipsPage extends Component {
    state = {
        itemId: null,
    }

    onItemClick = (id) => {
        this.setState({
            itemId: id
        })
    }

    render() {

        const items = <StarshipList onItemClick={this.onItemClick} />
        
        const details = <StarshipDetails itemId={this.state.itemId} />

        return (
            <ErrorBoundry>
                <Row left={items} right={details} />
            </ErrorBoundry>
        )
    }
}