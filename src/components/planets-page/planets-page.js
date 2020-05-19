import React, {Component} from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { PlanetDetails } from '../sw-components/details';
import { PlanetsList } from '../sw-components/item-lists';


export default class PlanetsPage extends Component {
    state = {
        itemId: null,
    }

    onItemClick = (id) => {
        this.setState({
            itemId: id
        })
    }

    render() {

        const items = <PlanetsList onItemClick={this.onItemClick} />
        
        const details = <PlanetDetails itemId={this.state.itemId} />

        return (
            <ErrorBoundry>
                <Row left={items} right={details} />
            </ErrorBoundry>
        )
    }
}