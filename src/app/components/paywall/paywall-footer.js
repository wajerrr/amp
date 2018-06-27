import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from '../styled-link/styled-link';

const PaywallFooter = ({ linkHref, styles }) => (
  <footer className={styles.StyledFooter}>
    <p>
      Student and gift subscriptions also available.{' '}
      <StyledLink href={linkHref}>Subscribe now</StyledLink>
    </p>
  </footer>
);
export default PaywallFooter;

PaywallFooter.propTypes = {
  linkHref: PropTypes.string,
  styles: PropTypes.shape({}),
};

PaywallFooter.defaultProps = {
  linkHref: '',
  styles: {},
};
