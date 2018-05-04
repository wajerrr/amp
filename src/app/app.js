import React from 'react';
import PropTypes from 'prop-types';
import Page from './components/page';

const App = ({ url, data }) => (
  <Page url={url} title={data.canonical.headline} data={data} />
);

App.propTypes = {
  url: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default App;
