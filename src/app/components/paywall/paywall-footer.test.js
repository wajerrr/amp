import React from 'react';
import renderer from 'react-test-renderer';
import PaywallFooter from './paywall-footer';

describe('PaywallFooter', () => {
  it('should match the snapshot', () => {
    const paywallFooter = renderer
      .create(
        <PaywallFooter>
          <p>Test footer</p>
        </PaywallFooter>
      )
      .toJSON();
    expect(paywallFooter).toMatchSnapshot();
  });
});
