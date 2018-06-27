import React from 'react';
import PropTypes from 'prop-types';

const PaywallSection = ({ children, styles }) => (
  <section className={styles.StyledSection}>{children}</section>
);
export default PaywallSection;

PaywallSection.propTypes = {
  children: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

PaywallSection.defaultProps = {
  styles: {},
};
