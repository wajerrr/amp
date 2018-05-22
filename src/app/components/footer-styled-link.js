import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import spacings from '../styles/spacings';
import color from '../styles/color';

const footerLinkClassName = css`
  text-decoration: none;
  display: inline-block;
  padding: ${spacings.l} ${spacings.none};
  width: 50%;
  &:active {
    opacity: 0.3;
  }
`;
const linkColors = (sectionLevel) => css`
  color: ${sectionLevel === 0 ? color.thimphu : color.london};
`;

const StyledFooterLink = ({ headline, sectionLevel, href, children }) => (
  <a
    key={headline}
    className={`${footerLinkClassName} ${linkColors(sectionLevel)}`}
    href={href}
  >
    {children}
  </a>
);

StyledFooterLink.propTypes = {
  headline: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  sectionLevel: PropTypes.number.isRequired,
};

export default StyledFooterLink;
