import React from 'react';
import PropTypes from 'prop-types';

const PaywallHeader = ({ data, styles }) => (
  <header className={styles.StyledHeader}>
    <h2 className={styles.StyledHeaderTitle}>{data.content.title}</h2>
    <p className={styles.StyledHeaderText}>{data.content.text}</p>
  </header>
);
export default PaywallHeader;

PaywallHeader.propTypes = {
  data: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

PaywallHeader.defaultProps = {
  styles: {},
};
