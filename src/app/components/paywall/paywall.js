import React from 'react';
import PropTypes from 'prop-types';
import PaywallFooter from './paywall-footer';
import PaywallHeader from './paywall-header';
import PaywallImage from './paywall-image';
import PaywallList from './paywall-list';
import PaywallSection from './paywall-section';
import PaywallText from './paywall-text';
import {
  LargeSubscribeButton,
  LargeSubscribeButtonInvertedStyles,
} from '../styled-subscribe-button/styled-subscribe-button';
import StyledLink from '../styled-link/styled-link';

const benefitsList = [
  {
    title: 'Print or digital edition',
    text: 'delivered to you each week',
  },
  {
    title: 'Economist.com',
    text:
      'including blog content updated throughout the week and our online archive',
  },
  {
    title: 'Audio edition',
    text: 'each week’s issue read by professional broadcasters',
  },
  {
    title: 'The Economist Espresso',
    text: 'your morning briefing direct to your smartphone or inbox',
  },
];

const Paywall = ({ styles }) => (
  <section className={styles.StyledWrapper}>
    <PaywallHeader styles={styles}>
      <h2>You’ve reached your article limit</h2>
      <p>
        Subscribe now to get full access to <i>The Economist</i> via print,
        online and our apps.
      </p>
    </PaywallHeader>
    <div className={styles.StyledSubscribeButtonWrapper}>
      <LargeSubscribeButton
        href="https://subscription.economist.com/DE/EngCore/Ecom/SubWall"
        key="paywall-subscribe-button"
      />
    </div>
    <PaywallList list={benefitsList} styles={styles} />
    <PaywallImage
      image={{
        src:
          'https://i.piano.io/managedservices/theeconomist/regwall-product.png',
        alt: 'paywall-image',
      }}
      styles={styles}
    />
    <PaywallFooter styles={styles}>
      <p>
        Student and gift subscriptions also available.{' '}
        <StyledLink href="https://subscription.economist.com/DE/EngCore/Ecom/SubWall">
          Subscribe now
        </StyledLink>
      </p>
    </PaywallFooter>
  </section>
);

const Regwall = ({ styles }) => (
  <section className={styles.StyledWrapper}>
    <PaywallSection styles={styles}>
      <p className={styles.StyledSectionContent}>
        Already signed up or a subscriber?{' '}
        <StyledLink href="https://authenticate.economist.com/login">
          Log in
        </StyledLink>
      </p>
    </PaywallSection>
    <PaywallHeader styles={styles}>
      <h2>You’ve reached your article limit</h2>
      <p>
        Sign up to keep reading or subscribe now to get full access to{' '}
        <i>The Economist</i> via print, online and our apps.
      </p>
    </PaywallHeader>
    <div className={styles.StyledSubscribeButtonWrapper}>
      <LargeSubscribeButton
        href="https://subscription.economist.com/DE/EngCore/Ecom/SubWall"
        key="paywall-subscribe-button"
      />
    </div>
    <PaywallText styles={styles}>
      <i>The Economist</i> delivers incisive analysis on the issues that matter.
    </PaywallText>
    <div className={styles.StyledSubscribeButtonWrapper}>
      <LargeSubscribeButtonInvertedStyles href="https://stage.economist.com/free-email-newsletter-signup">
        Sign up: 3 articles per week
      </LargeSubscribeButtonInvertedStyles>
    </div>
    <PaywallImage
      image={{
        src:
          'https://i.piano.io/managedservices/theeconomist/regwall-product.png',
        alt: 'paywall-image',
      }}
      styles={styles}
    />
    <PaywallText styles={styles}>Subscribe now to enjoy:</PaywallText>
    <PaywallList list={benefitsList} styles={styles} />
    <PaywallFooter styles={styles}>
      <p>
        Student and gift subscriptions also available.{' '}
        <StyledLink href="https://subscription.economist.com/DE/EngCore/Ecom/RegWall">
          Subscribe now
        </StyledLink>
      </p>
    </PaywallFooter>
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
