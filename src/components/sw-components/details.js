import React from 'react';
import ItemDetails from '../item-details';
import {Record} from '../item-details/item-details'
import {SwapiServiceConsumer} from '../swapi-service-context';

const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            { ({getPerson, getPersonImg}) => {
                return (
                    <ItemDetails   itemId={itemId}
                       getData={getPerson}
                       getImageUrl={getPersonImg} >
                       <Record field="gender" label="Gender" />
                       <Record field="eyeColor" label="Eye Color" />
                    </ItemDetails>
                )
            } }
        </SwapiServiceConsumer>
    )
}

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            { ({getPlanet, getPlanetImg}) => {
                return (
                    <ItemDetails   itemId={itemId}
                       getData={getPlanet}
                       getImageUrl={getPlanetImg} >
                        <Record field="population" label="Population" />
                        <Record field="rotationPeriod" label="Rotation Period" />
                        <Record field="diameter" label="Diameter" />
                    </ItemDetails>
                )
            } }
        </SwapiServiceConsumer>
    )
}

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            { ({getStarship, getStarshipImg}) => {
                return (
                    <ItemDetails     itemId={itemId}
                         getData={getStarship}
                         getImageUrl={getStarshipImg} >
                        <Record field="model" label="Model" />
                        <Record field="length" label="Length" />
                    </ItemDetails>
                )
            } }
        </SwapiServiceConsumer>
    )
}

export {PersonDetails, PlanetDetails, StarshipDetails};