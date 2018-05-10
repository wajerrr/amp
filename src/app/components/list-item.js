import React from 'react';

import { css } from 'emotion';

const listItemClassName = css`
  display: block;
`;

const ListItem = (item) => (
  <a className={listItemClassName} href={item.url.canonical}>
    {item.headline}
  </a>
);

export default ListItem;
