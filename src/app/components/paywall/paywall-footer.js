import React from 'react';
import PropTypes from 'prop-types';

const PaywallFooter = ({ children, styles }) => (
  <footer className={styles.StyledFooter}>{children}</footer>
);
export default PaywallFooter;

PaywallFooter.propTypes = {
  children: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

PaywallFooter.defaultProps = {
  styles: {},
};
