import React from 'react';
import renderer from 'react-test-renderer';
import PaywallImage from './paywall-image';

describe('PaywallImage', () => {
  it('should match the snapshot', () => {
    const paywallImage = renderer
      .create(
        <PaywallImage
          data={{
            id: 'regwall-footer',
            type: 'image',
            content: {
              src:
                'https://i.piano.io/managedservices/theeconomist/regwall-product.png',
              alt: 'paywall-image',
            },
          }}
        />
      )
      .toJSON();
    expect(paywallImage).toMatchSnapshot();
  });
});
