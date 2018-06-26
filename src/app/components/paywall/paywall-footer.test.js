import React from 'react';
import renderer from 'react-test-renderer';
import PaywallFooter from './paywall-footer';

describe('PaywallFooter', () => {
  it('should match the snapshot', () => {
    const paywallFooter = renderer
      .create(
        <PaywallFooter
          data={{
            id: 'regwall-footer',
            type: 'footer',
            content: {
              text: ['Test footer'],
            },
          }}
        />
      )
      .toJSON();
    expect(paywallFooter).toMatchSnapshot();
  });
});
