import React from 'react';
import renderer from 'react-test-renderer';
import PaywallAccess from './paywall-access';

describe('PaywallAccess', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<PaywallAccess>paid content</PaywallAccess>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
