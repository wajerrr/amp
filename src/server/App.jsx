import React from 'react';
import { css } from 'emotion';

const className = css`
  background: green;
`;

const App = ({ title, url }) => (
  <div className={className}>
    <h1>{title}</h1>
    <a target="_blank" href={url}>
      {' '}
      <h2>{url}</h2>{' '}
    </a>
  </div>
);
export default App;
