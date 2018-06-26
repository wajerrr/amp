import React from 'react';
import renderer from 'react-test-renderer';
import PaywallHeader from './paywall-header';

describe('PaywallHeader', () => {
  it('should match the snapshot', () => {
    const paywallHeader = renderer
      .create(
        <PaywallHeader
          data={{
            id: 'regwall-header',
            type: 'header',
            content: {
              title: 'Title',
              text: ['Test header'],
            },
          }}
        />
      )
      .toJSON();
    expect(paywallHeader).toMatchSnapshot();
  });
});
