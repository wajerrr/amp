import React from 'react';
import PropTypes from 'prop-types';

const PaywallSection = ({ data, styles }) => (
  <section className={styles.StyledSection}>
    <span className={styles.StyledSectionContent}>{data.content.text}</span>
  </section>
);
export default PaywallSection;

PaywallSection.propTypes = {
  data: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

PaywallSection.defaultProps = {
  styles: {},
};
