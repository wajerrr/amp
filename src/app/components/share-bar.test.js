import React from 'react';
import renderer from 'react-test-renderer';
import ShareBar from './share-bar';

describe('ShareBar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<ShareBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot with comments', () => {
    const tree = renderer.create(<ShareBar commentsUri="/" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
