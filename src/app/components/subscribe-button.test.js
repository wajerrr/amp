import React from 'react';
import renderer from 'react-test-renderer';
import SubscribeButton from './subscribe-button';

describe('SubscribeButton', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<SubscribeButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
