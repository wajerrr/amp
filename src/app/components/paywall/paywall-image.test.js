import React from 'react';
import renderer from 'react-test-renderer';
import PaywallImage from './paywall-image';

describe('PaywallImage', () => {
  it('should match the snapshot', () => {
    const paywallImage = renderer
      .create(
        <PaywallImage
          image={{
            src: 'www.testimage.com',
            alt: 'paywall-image',
          }}
        />
      )
      .toJSON();
    expect(paywallImage).toMatchSnapshot();
  });
});
