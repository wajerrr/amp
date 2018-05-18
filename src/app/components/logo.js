import React from 'react';
import styled from 'react-emotion';

import IconEconomist from '@economist/component-icon/lib/inline-icons/economist';

const StyledLogoLink = styled('a')`
  display: block;
  width: 124px;
  height: 62px;
`;

const HiddenSpan = styled('span')`
  display: none;
`;

const Logo = () => (
  <StyledLogoLink href="//www.economist.com" title="The Economist">
    <HiddenSpan>The Economist</HiddenSpan>
    <IconEconomist />
  </StyledLogoLink>
);

export default Logo;
