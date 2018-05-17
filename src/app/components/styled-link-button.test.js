import React from 'react';
import renderer from 'react-test-renderer';
import StyledLinkButton from './styled-link-button';

describe('StyledLinkButton', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <StyledLinkButton
          buttonProps={{ text: 'test button', url: 'www.url.com' }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
