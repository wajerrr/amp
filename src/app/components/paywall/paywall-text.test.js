import React from 'react';
import renderer from 'react-test-renderer';
import PaywallText from './paywall-text';

describe('PaywallText', () => {
  it('should match the snapshot', () => {
    const paywallText = renderer
      .create(<PaywallText>Test text</PaywallText>)
      .toJSON();
    expect(paywallText).toMatchSnapshot();
  });
});
