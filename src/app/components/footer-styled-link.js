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

const StyledFooterLink = ({ link, sectionLevel, children }) => (
  <a
    key={link.headline}
    className={`${footerLinkClassName} ${linkColors(sectionLevel)}`}
    href={link.url.canonical}
  >
    {children}
  </a>
);

StyledFooterLink.propTypes = {
  link: PropTypes.shape({
    headline: PropTypes.string,
    url: PropTypes.shape({
      canonical: PropTypes.string,
    }),
  }).isRequired,
  children: PropTypes.string.isRequired,
  sectionLevel: PropTypes.number.isRequired,
};

export default StyledFooterLink;
