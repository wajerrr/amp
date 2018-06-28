import React from 'react';
import renderer from 'react-test-renderer';
import { PaywallHeader, RegwallHeader } from './paywall-header';

describe('PaywallHeader and RegwallHeader', () => {
  it('should match the snapshot for the PaywallHeader', () => {
    const paywallHeader = renderer.create(<PaywallHeader />).toJSON();
    expect(paywallHeader).toMatchSnapshot();
  });
  it('should match the snapshot for the RegwallHeader', () => {
    const paywallHeader = renderer.create(<RegwallHeader />).toJSON();
    expect(paywallHeader).toMatchSnapshot();
  });
});
