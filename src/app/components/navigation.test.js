import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from './navigation';

describe('Navigation', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
