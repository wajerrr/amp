import React from 'react';
import PropTypes from 'prop-types';
import Error404 from '@economist/component-404';
import PaywallAccess from './components/paywall-access/paywall-access';
import Page from './components/page/page';
import Article from './components/article/article';

const App = ({ data, is404 }) => (
  <Page data={data}>
    {is404 ? (
      <Error404 />
    ) : (
      <PaywallAccess>
        <Article data={data.article} />
      </PaywallAccess>
    )}
  </Page>
);
App.defaultProps = { is404: false };

App.propTypes = {
  is404: PropTypes.bool,
  data: PropTypes.shape({}).isRequired,
};

export default App;
