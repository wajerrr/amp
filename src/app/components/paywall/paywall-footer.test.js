import React from 'react';
import renderer from 'react-test-renderer';
import PaywallFooter from './paywall-footer';

describe('PaywallFooter', () => {
  it('should match the snapshot', () => {
    const paywallFooter = renderer
      .create(<PaywallFooter linkHref="www.testLink.com" />)
      .toJSON();
    expect(paywallFooter).toMatchSnapshot();
  });
});
