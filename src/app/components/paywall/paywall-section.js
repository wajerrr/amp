import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from '../styled-link/styled-link';

const PaywallSection = ({ styles }) => (
  <section className={styles.StyledSection}>
    <p className={styles.StyledSectionContent}>
      Already signed up or a subscriber?{' '}
      <StyledLink href="https://authenticate.economist.com/login">
        Log in
      </StyledLink>
    </p>
  </section>
);
export default PaywallSection;

PaywallSection.propTypes = {
  styles: PropTypes.shape({}),
};

PaywallSection.defaultProps = {
  styles: {},
};
