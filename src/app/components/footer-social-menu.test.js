import React from 'react';
import renderer from 'react-test-renderer';
import FooterSocialMenu from './footer-social-menu';

const socialMenuData = {
  id: 'menu-unicorn-keep-updated',
  type: 'menu',
  headline: 'Keep updated',
  hasPart: {
    parts: [
      {
        headline: 'The Economist on Facebook',
        url: {
          canonical: 'https://www.facebook.com/TheEconomist',
        },
        meta: 'facebook',
        isPartOf: {
          context: {
            position: 0,
          },
        },
      },
      {
        headline: 'The Economist on Twitter',
        url: {
          canonical: 'https://twitter.com/TheEconomist',
        },
        meta: 'twitter',
        isPartOf: {
          context: {
            position: 1,
          },
        },
      },
      {
        headline: 'The Economist Google Plus',
        url: {
          canonical: 'https://plus.google.com/100470681032489535736/posts',
        },
        meta: 'googleplus',
        isPartOf: {
          context: {
            position: 2,
          },
        },
      },
      {
        headline: 'Subscribe to The Economist newsletters',
        url: {
          canonical: 'https://www.economist.com/newsletters',
        },
        meta: 'mail',
        isPartOf: {
          context: {
            position: 3,
          },
        },
      },
    ],
  },
};

describe('FooterSocialMenu', () => {
  it('should match the snapshot', () => {
    const footer = renderer
      .create(<FooterSocialMenu menuItems={socialMenuData} />)
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
});
