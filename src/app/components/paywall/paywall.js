import React from 'react';
import PropTypes from 'prop-types';
import PaywallFooter from './paywall-footer';
import { PaywallHeader, RegwallHeader } from './paywall-header';
import PaywallImage from './paywall-image';
import PaywallList from './paywall-list';
import PaywallSection from './paywall-section';
import PaywallText from './paywall-text';
import {
  PaywallSubscribeButton,
  PaywallSubscribeButtonInvertedStyles,
} from './paywall-subscribe-button';

const Paywall = ({ styles }) => (
  <section className={styles.StyledWrapper}>
    <PaywallHeader styles={styles} />
    <PaywallSubscribeButton
      href="https://subscription.economist.com/DE/EngCore/Ecom/SubWall"
      styles={styles}
    />
    <PaywallList styles={styles} />
    <PaywallImage styles={styles} />
    <PaywallFooter
      linkHref="https://subscription.economist.com/DE/EngCore/Ecom/SubWall"
      styles={styles}
    />
  </section>
);

const Regwall = ({ styles }) => (
  <section className={styles.StyledWrapper}>
    <PaywallSection styles={styles} />
    <RegwallHeader styles={styles} />
    <PaywallSubscribeButton
      href="https://subscription.economist.com/DE/EngCore/Ecom/SubWall"
      styles={styles}
    />
    <PaywallText styles={styles}>
      <i>The Economist</i> delivers incisive analysis on the issues that matter.
    </PaywallText>
    <PaywallSubscribeButtonInvertedStyles
      href="https://stage.economist.com/free-email-newsletter-signup"
      styles={styles}
    >
      Sign up: 3 articles per week
    </PaywallSubscribeButtonInvertedStyles>
    <PaywallImage styles={styles} />
    <PaywallText styles={styles}>Subscribe now to enjoy:</PaywallText>
    <PaywallList styles={styles} />
    <PaywallFooter
      linkHref="https://subscription.economist.com/DE/EngCore/Ecom/RegWall"
      styles={styles}
    />
  </section>
);

export { Paywall, Regwall };

Paywall.propTypes = {
  styles: PropTypes.shape({}),
};
Regwall.propTypes = {
  styles: PropTypes.shape({}),
};

Paywall.defaultProps = {
  styles: {},
};
Regwall.defaultProps = {
  styles: {},
};
