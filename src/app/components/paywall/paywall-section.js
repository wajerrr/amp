import React from 'react';
import PropTypes from 'prop-types';
import PaywalllTextButton from './paywall-text-button';

const PaywallSection = ({ styles }) => (
  <section className={styles.section}>
    <p className={styles.sectionContent}>
      Already signed up or a subscriber?{' '}
      <PaywalllTextButton styles={styles} on="tap:amp-access.login">
        Log in
      </PaywalllTextButton>
    </p>
  </section>
);
export default PaywallSection;

PaywallSection.propTypes = {
  styles: PropTypes.shape({
    section: PropTypes.string,
    sectionContent: PropTypes.string,
    paywallTextButton: PropTypes.string,
  }),
};
PaywallSection.defaultProps = {
  styles: {},
};
