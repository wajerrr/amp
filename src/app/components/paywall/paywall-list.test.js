import React from 'react';
import renderer from 'react-test-renderer';
import PaywallList from './paywall-list';

describe('PaywallList', () => {
  it('should match the snapshot', () => {
    const paywallList = renderer.create(<PaywallList />).toJSON();
    expect(paywallList).toMatchSnapshot();
  });
});
