import React from 'react';
import StyledLink from '../components/styled-link/styled-link';
import defaultData from './default-paywall-data';

const { headerTitle, benefitsList, image } = defaultData;

const regwallData = [
  {
    id: 'regwall-section',
    type: 'section',
    content: {
      text: [
        'Already signed up or a subscriber? ',
        React.createElement(
          StyledLink,
          {
            href: 'https://authenticate.economist.com/login',
            key: 'regwall-section-link',
          },
          'Log in'
        ),
      ],
    },
  },
  {
    id: 'regwall-header',
    type: 'header',
    content: {
      title: headerTitle,
      text: [
        'Sign up to keep reading or subscribe now to get full access to ',
        React.createElement(
          'i',
          { key: 'regwall-header-italic-text' },
          'The Economist'
        ),
        ' via print, online and our apps.',
      ],
    },
  },
  {
    id: 'regwall-subscribe-button-1',
    type: 'subscribeButton',
    content: {
      href: 'https://subscription.economist.com/DE/EngCore/Ecom/RegWall',
      text: 'Subscribe',
    },
  },
  {
    id: 'regwall-subscribe-button-2',
    type: 'subscribeButton',
    props: {
      invertedStyles: true,
    },
    content: {
      href: 'https://stage.economist.com/free-email-newsletter-signup',
      text: 'Sign up: 3 articles per week',
    },
  },
  {
    id: 'regwall-text-1',
    type: 'text',
    content: {
      text: [
        React.createElement(
          'i',
          { key: 'regwall-text-1-italic-text' },
          'The Economist'
        ),
        ' delivers incisive analysis on the issues that matter.',
      ],
    },
  },
  {
    id: 'regwall-image',
    ...image,
  },
  {
    id: 'regwall-text-2',
    type: 'text',
    content: {
      text: ['Subscribe now to enjoy:'],
    },
  },
  {
    id: 'regwall-benefits-list',
    ...benefitsList,
  },
  {
    id: 'regwall-footer',
    type: 'footer',
    content: {
      text: [
        'Student and gift subscriptions also available. ',
        React.createElement(
          StyledLink,
          {
            href: 'https://subscription.economist.com/DE/EngCore/Ecom/RegWall',
            key: 'regwall-footer-italic-text',
          },
          'Subscribe now'
        ),
      ],
    },
  },
];

export default regwallData;
