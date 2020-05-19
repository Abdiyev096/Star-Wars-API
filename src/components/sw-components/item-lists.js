import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc-helpers/with-data';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const hideRenderFunc = (Wrapped, func) => {
    return (props) => {
        return <Wrapped {...props} renderItem={func} />
    }
}

const renderItemName = ({name}) => {
    return `${name}`
}

const {getAllPeople,
        getAllPlanets,
        getAllStarships} = swapiService;

const PersonsList = withData(hideRenderFunc(ItemList, renderItemName), getAllPeople);

const PlanetsList = withData(hideRenderFunc(ItemList, renderItemName), getAllPlanets);

const StarshipList = withData(hideRenderFunc(ItemList, renderItemName), getAllStarships);


export {PersonsList,
        PlanetsList,
        StarshipList};