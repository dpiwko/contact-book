import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
  return (
    <li className="c-listItem">
      <span className="c-listItem_name">
        {props.item.name}
      </span>
      <span className="c-listItem_userName">
        @{props.item.username}
      </span>
    </li>
  );
}

export default ListItem;
