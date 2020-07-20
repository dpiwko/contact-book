import React from 'react';
import { ListItem } from '../../components';
import './List.css';

const List = (props) => {
  if (props.list.length <= 0) {
    return (
      <p className="c-list_noResults">
        No results
      </p>
    );
  }
  
  return (
    <ol className="c-list">
      {props.list.map((listItem) => (
        <ListItem item={listItem} key={listItem.id} />
      ))}
    </ol>
  );
}

export default List;
