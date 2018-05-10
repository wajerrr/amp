import React from 'react';
import { css } from 'emotion';
import color from '../styles/color';

const buttonClassName = css`
  background-color: ${color.chicago};
  border: none;
  height: 30px;
  margin-right: 18px;
  margin-right: 1rem;
  padding: 0 18px;
  padding: 0 1rem;
  text-align: center;
  border-radius: 4px;
  font-size: 0.70233em;
`;

const linkClassName = css`
  line-height: 30px;
  color: ${color.thimphu};
  text-decoration: none;
`;

const StyledLinkButton = ({ buttonProps }) => (
  <button className={buttonClassName}>
    <a className={linkClassName} href={buttonProps.url}>
      {buttonProps.text}
    </a>
  </button>
);

export default StyledLinkButton;
