import React from 'react';
import PropTypes from 'prop-types';
import Error404 from '@economist/component-404';

import Page from './components/page/page';
// TODO: Remove this eslint disabling when the paywall logic is implemented and everything is being used.
/* eslint-disable no-unused-vars */
import Article from './components/article/article';
import StyledPaywall from './components/styled-paywall/styled-paywall';
import paywallData from './data/paywall-data';
import regwallData from './data/regwall-data';

const App = ({ data, is404 }) => (
  <Page data={data}>
    {is404 ? <Error404 /> : <Article data={data.article} />}
  </Page>
);
App.defaultProps = { is404: false };

App.propTypes = {
  is404: PropTypes.bool,
  data: PropTypes.shape({}).isRequired,
};

export default App;
