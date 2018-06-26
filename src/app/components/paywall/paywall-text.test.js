import React from 'react';
import renderer from 'react-test-renderer';
import PaywallText from './paywall-text';

describe('PaywallFooter', () => {
  it('should match the snapshot', () => {
    const paywallText = renderer
      .create(
        <PaywallText
          data={{
            id: 'regwall-text-1',
            type: 'text',
            content: {
              text: ['Test text'],
            },
          }}
        />
      )
      .toJSON();
    expect(paywallText).toMatchSnapshot();
  });
});
