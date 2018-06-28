import React from 'react';
import PropTypes from 'prop-types';
import {
  LargeSubscribeButton,
  LargeSubscribeButtonInvertedStyles,
} from '../styled-subscribe-button/styled-subscribe-button';

const PaywallSubscribeButton = ({ href, children, styles }) => (
  <div className={styles.subscribeButtonWrapper}>
    <LargeSubscribeButton href={href}>{children}</LargeSubscribeButton>
  </div>
);

const PaywallSubscribeButtonInvertedStyles = ({ href, children, styles }) => (
  <div className={styles.subscribeButtonWrapper}>
    <LargeSubscribeButtonInvertedStyles href={href}>
      {children}
    </LargeSubscribeButtonInvertedStyles>
  </div>
);
export { PaywallSubscribeButton, PaywallSubscribeButtonInvertedStyles };

const subscribeButtonPropTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string,
  styles: PropTypes.shape({
    subscribeButtonWrapper: PropTypes.string,
  }),
};
const defaultPropTypes = {
  children: '',
  styles: {},
};
PaywallSubscribeButton.propTypes = subscribeButtonPropTypes;
PaywallSubscribeButton.defaultProps = defaultPropTypes;
PaywallSubscribeButtonInvertedStyles.propTypes = subscribeButtonPropTypes;
PaywallSubscribeButtonInvertedStyles.defaultProps = defaultPropTypes;
