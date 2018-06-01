import React from 'react';
import styled from 'react-emotion';
import IconTrust from '@economist/component-icon/lib/inline-icons/trust';
import { color, fontFamily, text, spacings } from '../../styles';

const StyledLink = styled('a')`
  display: inline-block;
  width: 168px;
  border-radius: 100px;
  border: solid 1px ${color.cardiff};
  font-family: ${fontFamily.serif};
  font-size: ${text.sizeStep[-2]};
  font-weight: 300;
  padding: ${spacings.xs} ${spacings.s};
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

const StyledIcon = styled(IconTrust)`
  svg {
    width: ${text.sizeStep[0]};
    height: ${text.sizeStep[0]};
    margin-right: ${spacings.xs};
    vertical-align: middle;
    padding-bottom: 1px;
  }
`;

const ArticleAboutEconomistLink = () => (
  <StyledLink href="https://www.economist.com/about-the-economist">
    <StyledIcon /> About <em>The Economist</em>
  </StyledLink>
);

export default ArticleAboutEconomistLink;
