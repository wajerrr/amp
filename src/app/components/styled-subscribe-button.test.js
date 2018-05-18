import React from 'react';
import renderer from 'react-test-renderer';
import StyledSubscribeButton from './styled-subscribe-button';

describe('StyledSubscribeButton', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<StyledSubscribeButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
