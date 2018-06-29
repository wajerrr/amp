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
  <section className={styles.wrapper}>
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
  <section className={styles.wrapper}>
    <PaywallSection styles={styles} />
    <RegwallHeader styles={styles} />
    <PaywallSubscribeButton
      href="https://subscription.economist.com/DE/EngCore/Ecom/SubWall"
      styles={styles}
    />
    <PaywallText styles={styles}>
      <i>The Economist</i> delivers incisive analysis on the issues that matter.
    </PaywallText>
    <PaywallSubscribeButtonInvertedStyles styles={styles}>
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

const paywallPropTypes = {
  styles: PropTypes.shape({
    paywallTextButton: PropTypes.string,
    paywallButton: PropTypes.string,
    section: PropTypes.string,
    sectionContent: PropTypes.string,
    wrapper: PropTypes.string,
    header: PropTypes.string,
    headerTitle: PropTypes.string,
    headerText: PropTypes.string,
    listWrapper: PropTypes.string,
    list: PropTypes.string,
    listItem: PropTypes.string,
    text: PropTypes.string,
    subscribeButtonWrapper: PropTypes.string,
    imageWrapper: PropTypes.string,
    footer: PropTypes.string,
  }),
};
const defaultPropTypes = {
  styles: {},
};
Paywall.propTypes = paywallPropTypes;
Paywall.defaultProps = defaultPropTypes;
Regwall.propTypes = paywallPropTypes;
Regwall.defaultProps = defaultPropTypes;
