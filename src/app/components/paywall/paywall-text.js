import React from 'react';
import PropTypes from 'prop-types';

const PaywallText = ({ children, styles }) => (
  <p className={styles.text}>{children}</p>
);
export default PaywallText;

PaywallText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  styles: PropTypes.shape({
    text: PropTypes.string,
  }),
};
PaywallText.defaultProps = {
  styles: {},
};