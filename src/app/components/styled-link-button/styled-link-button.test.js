import React from 'react';
import renderer from 'react-test-renderer';
import StyledLinkButton from './styled-link-button';

describe('StyledLinkButton', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <StyledLinkButton href="www.url.com">test button</StyledLinkButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
