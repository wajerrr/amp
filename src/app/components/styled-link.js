import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import color from '../styles/color';
import spacings from '../styles/spacings';
import fontFamily from '../styles/font-family';

const linkStyles = {
  normal: css`
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
  `,
  accordion: css`
    display: block;
    text-decoration: none;
    color: ${color.kiev};
    padding: ${spacings.m} ${spacings.l};
    text-indent: ${spacings.l};
    font-family: ${fontFamily.sans}
    &:active {
      background-color: ${color.cardiff};
    }
    &:last-of-type {
      border-bottom: 1px solid ${color.cardiff};
    }
  `,
};

const StyledLink = ({ href, children, styleType }) => (
  <a href={href} className={linkStyles[styleType] || linkStyles.normal}>
    {children}
  </a>
);

StyledLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  styleType: PropTypes.string,
};

StyledLink.defaultProps = {
  styleType: '',
};
export default StyledLink;
