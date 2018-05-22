import React from 'react';
import renderer from 'react-test-renderer';
import StyledShareBar from './styled-share-bar';

describe('StyledShareBar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<StyledShareBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot with comments', () => {
    const tree = renderer.create(<StyledShareBar commentsUri="/" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
