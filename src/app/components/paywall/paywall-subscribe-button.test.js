import React from 'react';
import renderer from 'react-test-renderer';
import {
  PaywallSubscribeButton,
  PaywallSubscribeButtonInvertedStyles,
} from './paywall-subscribe-button';

describe('PaywallSubscribeButton and PaywallSubscribeButtonInvertedStyles', () => {
  it('should match the snapshot for a PaywallSubscribeButton', () => {
    const paywallText = renderer
      .create(<PaywallSubscribeButton href="www.testsubscribebutton.com" />)
      .toJSON();
    expect(paywallText).toMatchSnapshot();
  });
  it('should match the snapshot for a PaywallSubscribeButtonInvertedStyles', () => {
    const paywallText = renderer
      .create(
        <PaywallSubscribeButtonInvertedStyles href="www.testsubscribebutton.com">
          Test children
        </PaywallSubscribeButtonInvertedStyles>
      )
      .toJSON();
    expect(paywallText).toMatchSnapshot();
  });
});
