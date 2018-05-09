import React from 'react';

const ListItem = (item) => (
  <a style={{ display: 'block' }} href={item.url.canonical}>
    {item.headline}
  </a>
);

export default ListItem;
