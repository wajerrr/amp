import React from 'react';
import renderer from 'react-test-renderer';
import StyledLink from './styled-link';

describe('StyledLink', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<StyledLink href="economist.com">click me</StyledLink>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
