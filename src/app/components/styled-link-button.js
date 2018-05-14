import React from 'react';
import { css } from 'emotion';
import color from '../styles/color';
import fontFamily from '../styles/font-family';

const buttonClassName = (customStyles) => css`
  background-color: ${color.chicago};
  border: none;
  box-sizing: border-box;
  height: 30px;
  padding: 0 1rem;
  text-align: center;
  border-radius: 4px;
  font-size: 0.70233em;
  font-family: ${fontFamily.sans};
  margin-left: 3em;
  &:active {
    background-color: ${color.athens};
  }
  line-height: 30px;
  color: ${color.thimphu};
  text-decoration: none;
  ${customStyles};
`;

const StyledLinkButton = ({ buttonProps, customStyles }) => (
  <a
    className={buttonClassName(customStyles)}
    href={buttonProps.url}
    role="button"
  >
    {buttonProps.text}
  </a>
);

export default StyledLinkButton;
