import React from 'react';
import PropTypes from 'prop-types';

const PaywallHeader = ({ styles }) => (
  <header className={styles.header}>
    <h2>You’ve reached your article limit</h2>
    <p>
      Subscribe now to get full access to <i>The Economist</i> via print, online
      and our apps.
    </p>
  </header>
);

const RegwallHeader = ({ styles }) => (
  <header className={styles.header}>
    <h2>You’ve reached your article limit</h2>
    <p>
      Sign up to keep reading or subscribe now to get full access to{' '}
      <i>The Economist</i> via print, online and our apps.
    </p>
  </header>
);

export { PaywallHeader, RegwallHeader };

const paywallHeaderPropTypes = {
  styles: PropTypes.shape({
    header: PropTypes.string,
  }),
};
const defaultPropTypes = {
  styles: {},
};
PaywallHeader.propTypes = paywallHeaderPropTypes;
PaywallHeader.defaultProps = defaultPropTypes;
RegwallHeader.propTypes = paywallHeaderPropTypes;
RegwallHeader.defaultProps = defaultPropTypes;
