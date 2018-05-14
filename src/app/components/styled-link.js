import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import color from '../styles/color';

const linkClassName = css`
  &,
  &:active {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid ${color.chicago};
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: 2px solid ${color.kosice};
  }
  &:hover,
  &.visited {
    color: ${color.chicago};
    border-bottom-color: ${color.chicago};
  }
`;

const StyledLink = ({ href, children }) => (
  <a href={href} className={linkClassName}>
    {children}
  </a>
);

StyledLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default StyledLink;
