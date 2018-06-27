import React from 'react';
import PropTypes from 'prop-types';
import {
  LargeSubscribeButton,
  LargeSubscribeButtonInvertedStyles,
} from '../styled-subscribe-button/styled-subscribe-button';

const PaywallSubscribeButton = ({ href, children, styles }) => (
  <div className={styles.StyledSubscribeButtonWrapper}>
    <LargeSubscribeButton href={href}>{children}</LargeSubscribeButton>
  </div>
);

const PaywallSubscribeButtonInvertedStyles = ({ href, children, styles }) => (
  <div className={styles.StyledSubscribeButtonWrapper}>
    <LargeSubscribeButtonInvertedStyles href={href}>
      {children}
    </LargeSubscribeButtonInvertedStyles>
  </div>
);
export { PaywallSubscribeButton, PaywallSubscribeButtonInvertedStyles };

PaywallSubscribeButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string,
  styles: PropTypes.shape({}),
};
PaywallSubscribeButton.defaultProps = {
  children: '',
  styles: {},
};

PaywallSubscribeButtonInvertedStyles.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string,
  styles: PropTypes.shape({}),
};
PaywallSubscribeButtonInvertedStyles.defaultProps = {
  children: '',
  styles: {},
};
