import React from 'react';
import renderer from 'react-test-renderer';
import PaywallList from './paywall-list';

describe('PaywallList', () => {
  it('should match the snapshot', () => {
    const paywallList = renderer
      .create(
        <PaywallList
          list={[
            {
              title: 'Title 1',
              text: 'Item 1',
            },
            {
              title: 'Title 2',
              text: 'Item 2',
            },
          ]}
        />
      )
      .toJSON();
    expect(paywallList).toMatchSnapshot();
  });
});
