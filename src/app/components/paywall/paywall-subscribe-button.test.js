import React from 'react';
import renderer from 'react-test-renderer';
import PaywallSubscribeButton from './paywall-subscribe-button';

describe('PaywallSubscribeButton', () => {
  it('should match the snapshot', () => {
    const paywallSubscribeButton = renderer
      .create(
        <PaywallSubscribeButton
          data={{
            id: 'regwall-subscribe-button-1',
            type: 'subscribeButton',
            content: {
              href:
                'https://subscription.economist.com/DE/EngCore/Ecom/RegWall',
              text: 'Subscribe',
            },
          }}
        />
      )
      .toJSON();
    expect(paywallSubscribeButton).toMatchSnapshot();
  });
});
