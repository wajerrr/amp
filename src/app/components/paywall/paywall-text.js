import React from 'react';
import PropTypes from 'prop-types';

const PaywallText = ({ data, styles }) => (
  <p className={styles.StyledText}>{data.content.text}</p>
);
export default PaywallText;

PaywallText.propTypes = {
  data: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

PaywallText.defaultProps = {
  styles: {},
};
