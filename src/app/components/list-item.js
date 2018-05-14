import React from 'react';

import { css } from 'emotion';
import color from '../styles/color';

const listItemLinkClassName = css`
  display: block;
  text-decoration: none;
  color: ${color.kiev};
  margin: 1em;
`;

const ListItem = (item) => (
  <a className={listItemLinkClassName} href={item.url.canonical}>
    {item.headline}
  </a>
);

export default ListItem;
