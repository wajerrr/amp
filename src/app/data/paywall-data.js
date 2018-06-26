import React from 'react';
import StyledLink from '../components/styled-link/styled-link';
import defaultData from './default-paywall-data';

const { headerTitle, benefitsList, image } = defaultData;

const paywallData = [
  {
    id: 'paywall-header',
    type: 'header',
    content: {
      title: headerTitle,
      text: [
        'Subscribe now to get full access to ',
        React.createElement(
          'i',
          { key: 'paywall-header-italic-text' },
          'The Economist'
        ),
        ' via print, online and our apps.',
      ],
    },
  },
  {
    id: 'paywall-subscribe-button',
    type: 'subscribeButton',
    content: {
      href: 'https://subscription.economist.com/DE/EngCore/Ecom/SubWall',
    },
  },
  {
    id: 'paywall-benefits-list',
    ...benefitsList,
  },
  {
    id: 'paywall-image',
    ...image,
  },
  {
    id: 'paywall-footer',
    type: 'footer',
    content: {
      text: [
        'Student and gift subscriptions also available. ',
        React.createElement(
          StyledLink,
          {
            href: 'https://subscription.economist.com/DE/EngCore/Ecom/SubWall',
            key: 'paywall-footer-link',
          },
          'Subscribe now'
        ),
      ],
    },
  },
];

export default paywallData;
