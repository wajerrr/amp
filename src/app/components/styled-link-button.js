import React from 'react';
import { css } from 'emotion';
import color from '../styles/color';

const buttonClassName = (customStyles) => css`
  background-color: ${color.chicago};
  border: none;
  box-sizing: border-box;
  height: 30px;
  padding: 0 1rem;
  text-align: center;
  border-radius: 4px;
  font-size: 0.70233em;
  margin-left: 3em;
  &:active {
    background-color: ${color.athens};
  }
  ${customStyles};
`;

const linkClassName = css`
  line-height: 30px;
  color: ${color.thimphu};
  text-decoration: none;
`;

const StyledLinkButton = ({ buttonProps, customStyles }) => (
  <button className={buttonClassName(customStyles)}>
    <a className={linkClassName} href={buttonProps.url}>
      {buttonProps.text}
    </a>
  </button>
);

export default StyledLinkButton;
