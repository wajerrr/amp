import React from 'react';
import { css } from 'emotion';
import IconEconomist from '@economist/component-icon/lib/inline-icons/economist';

const logoClassName = css`
  display: block;
  width: 124px;
  height: 62px;
`;
const spanClassName = css`
  display: none;
`;

const Logo = () => (
  <a href="//www.economist.com" className={logoClassName} title="The Economist">
    <span className={spanClassName}>The Economist</span>
    <IconEconomist />
  </a>
);

export default Logo;
