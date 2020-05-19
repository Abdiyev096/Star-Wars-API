import React from 'react';

import './item-list.css';

const ItemList = (props) => {

    const {data, onItemClick, renderItem} = props;

    const itemList = data.map(data => {
      const info = renderItem(data);
      return (
        <li className="list-group-item"
            key={data.id}
            onClick={() => onItemClick(data.id)}>
          {info}
        </li>
      )
    })

    return (
      <ul className="item-list list-group">
       {itemList}
      </ul>
    );
  
}

export default ItemList;