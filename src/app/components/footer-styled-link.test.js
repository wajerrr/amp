import React from 'react';
import renderer from 'react-test-renderer';
import StyledFooterLink from './footer-styled-link';

describe('FooterStyledLink', () => {
  it('should match the snapshot at the first index', () => {
    const footer = renderer
      .create(
        <StyledFooterLink
          headline="testHeadline"
          href="www.ampcanonical.com"
          sectionLevel={0}
        >
          TestLink
        </StyledFooterLink>
      )
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
  it('should match the snapshot at any other index', () => {
    const footer = renderer
      .create(
        <StyledFooterLink
          headline="testHeadline"
          href="www.ampcanonical.com"
          sectionLevel={1}
        >
          TestLink
        </StyledFooterLink>
      )
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
});
