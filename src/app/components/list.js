import React from 'react';
import ListItem from './list-item';

const List = ({ listItems }) => {
  console.log('0-0-listItems', listItems);
  return listItems.map((item) => {
    const children = item.hasPart ? item.hasPart.parts : null;
    return children && children.length ? (
      <div>
        <b>{item.headline}</b>
        <List listItems={children} />
        <hr />
      </div>
    ) : (
      <ListItem {...item} />
    );
  });
};

export default List;
