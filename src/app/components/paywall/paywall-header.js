import React from 'react';
import PropTypes from 'prop-types';

const PaywallHeader = ({ children, styles }) => (
  <header className={styles.StyledHeader}>{children}</header>
);
export default PaywallHeader;

PaywallHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})])
    .isRequired,
  styles: PropTypes.shape({}),
};

PaywallHeader.defaultProps = {
  styles: {},
};
