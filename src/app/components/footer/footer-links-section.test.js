import React from 'react';
import renderer from 'react-test-renderer';
import FooterLinksSection from './footer-links-section';

const section = {
  id: 'menu-unicorn-primary-user-action',
  type: 'menu',
  hasPart: {
    parts: [
      {
        headline: 'Subscribe',
        url: {
          canonical: 'https://www.economist.com/subscribe',
        },
        meta: '',
        isPartOf: {
          context: {
            position: 0,
          },
        },
      },
      {
        headline: 'Contact us',
        url: {
          canonical: 'https://www.economist.com/contact-info',
        },
        meta: '',
        isPartOf: {
          context: {
            position: 1,
          },
        },
      },
    ],
  },
};

describe('FooterLinksSection', () => {
  it('should match the snapshot', () => {
    const footer = renderer
      .create(<FooterLinksSection menuItem={section} sectionLevel={1} />)
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
});
