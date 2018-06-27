import React from 'react';
import renderer from 'react-test-renderer';
import PaywallSection from './paywall-footer';

describe('PaywallSection', () => {
  it('should match the snapshot', () => {
    const paywallSection = renderer.create(<PaywallSection />).toJSON();
    expect(paywallSection).toMatchSnapshot();
  });
});
