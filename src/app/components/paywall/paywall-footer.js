import React from 'react';
import PropTypes from 'prop-types';

const PaywallFooter = ({ data, styles }) => (
  <footer className={styles.StyledFooter}>{data.content.text}</footer>
);
export default PaywallFooter;

PaywallFooter.propTypes = {
  data: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

PaywallFooter.defaultProps = {
  styles: {},
};
