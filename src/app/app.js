import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Error404 from '@economist/component-404';

import Page from './components/page/page';
import Article from './components/article/article';

const App = ({ data, is404 }) => (
  <Page data={data}>
    <Helmet>
      <script async={undefined} src="https://cdn.ampproject.org/v0.js" />
    </Helmet>
    {is404 ? <Error404 /> : <Article data={data.article} />}
  </Page>
);
App.defaultProps = { is404: false };

App.propTypes = {
  is404: PropTypes.bool,
  data: PropTypes.shape({}).isRequired,
};

export default App;
