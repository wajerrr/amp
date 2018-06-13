import React from 'react';
import renderer from 'react-test-renderer';
import PlaceholderImage from './placeholder-image';

describe('PlaceholderImage', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<PlaceholderImage containerHeight={100} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
