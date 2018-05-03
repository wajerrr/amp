import React from 'react';

const App = ({ title, url }) => (
  <div>
    <h1>{title}</h1>
    <a target="_blank" href={url}>
      {' '}
      <h2>{url}</h2>{' '}
    </a>
  </div>
);
export default App;
