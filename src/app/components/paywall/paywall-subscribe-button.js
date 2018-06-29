import React from 'react';
import PropTypes from 'prop-types';
import {
  LargeSubscribeButton,
  // LargeSubscribeButtonInvertedStyles,
} from '../styled-subscribe-button/styled-subscribe-button';

const PaywallSubscribeButton = ({ href, children, styles }) => (
  <div className={styles.subscribeButtonWrapper}>
    <LargeSubscribeButton href={href}>{children}</LargeSubscribeButton>
  </div>
);

PaywallSubscribeButton.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  styles: PropTypes.shape({
    subscribeButtonWrapper: PropTypes.string,
  }),
};
PaywallSubscribeButton.defaultProps = {
  children: '',
  href: '',
  styles: {},
};

const PaywallSubscribeButtonInvertedStyles = ({ children, styles }) => (
  <div className={styles.subscribeButtonWrapper}>
    <button on="tap:amp-access.login">{children}</button>
  </div>
);
export { PaywallSubscribeButton, PaywallSubscribeButtonInvertedStyles };

PaywallSubscribeButtonInvertedStyles.propTypes = {
  children: PropTypes.string,

  styles: PropTypes.shape({
    subscribeButtonWrapper: PropTypes.string,
  }),
};
PaywallSubscribeButtonInvertedStyles.defaultProps = {
  children: '',
  styles: {},
};
