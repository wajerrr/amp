import React from 'react';

import { css } from 'emotion';
import color from '../styles/color';

const listItemLinkClassName = css`
  display: block;
  text-decoration: none;
  color: ${color.kiev};
  margin: 1em;
`;
const listItemClassName = css`
  list-style-type: none;
  font-size: 0.9rem;
  text-indent: 1em;
`;

const ListItem = (item) => (
  <li className={listItemClassName}>
    <a className={listItemLinkClassName} href={item.url.canonical}>
      {item.headline}
    </a>
  </li>
);

export default ListItem;
