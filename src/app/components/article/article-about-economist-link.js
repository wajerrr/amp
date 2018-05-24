import React from 'react';
import styled from 'react-emotion';
import color from '../../styles/color';
import fontFamily from '../../styles/font-family';
import text from '../../styles/typography';
import spacings from '../../styles/spacings';

const StyledLink = styled('a')`
  display: inline-block;
  width: 158px;
  border-radius: 100px;
  border: solid 1px ${color.cardiff};
  font-family: ${fontFamily.serif};
  font-size: ${text.sizeStep[-2]};
  font-weight: 300;
  padding: ${spacings.xs};
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  color: ${color.kiev};
  transition: 0.2s opacity;
  margin-bottom: ${spacings.m};
  &:hover {
    color: ${color.chicago};
  }
`;

const ArticleAboutEconomistLink = () => (
  <StyledLink href="https://www.economist.com/about-the-economist">
    About <em>The Economist</em>
  </StyledLink>
);

export default ArticleAboutEconomistLink;
