import React from 'react';
import PropTypes from 'prop-types';
import StyledFooterLink from './footer-styled-link';

const FooterLinksSection = ({ menuItem, sectionLevel }) =>
  menuItem.hasPart.parts.map((child) => (
    <StyledFooterLink
      key={child.isPartOf.context.position}
      headline={child.headline}
      sectionLevel={sectionLevel}
      href={child.url.canonical}
    >
      {child.headline}
    </StyledFooterLink>
  ));

FooterLinksSection.propTypes = {
  menuItem: PropTypes.shape({}).isRequired,
  sectionLevel: PropTypes.number.isRequired,
};

export default FooterLinksSection;
