import React from 'react';
import renderer from 'react-test-renderer';
import PaywallHeader from './paywall-header';

describe('PaywallHeader', () => {
  it('should match the snapshot', () => {
    const paywallHeader = renderer
      .create(
        <PaywallHeader>
          <h2>Test header</h2>
        </PaywallHeader>
      )
      .toJSON();
    expect(paywallHeader).toMatchSnapshot();
  });
});
