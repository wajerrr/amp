import React from 'react';
import PropTypes from 'prop-types';
import Error404 from '@economist/component-404';

import Page from './components/page/page';
import Article from './components/article/article';

const App = ({ url, data, is404 = false }) => (
  <Page url={url} data={data}>
    {is404 ? <Error404 /> : <Article data={data.article} />}
  </Page>
);
App.defaultProps = { is404: false };

App.propTypes = {
  url: PropTypes.string.isRequired,
  is404: PropTypes.bool,
  data: PropTypes.shape({}).isRequired,
};

export default App;
