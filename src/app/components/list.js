import React from 'react';
import ListItem from './list-item';

const List = ({ listItems }) =>
  listItems.map((item) => {
    const children = item.hasPart ? item.hasPart.parts : null;
    return children && children.length ? (
      <div>
        <div>
          <b>{item.headline}</b>
        </div>
        <List listItems={children} />
        <hr />
      </div>
    ) : (
      <ListItem {...item} />
    );
  });

export default List;
