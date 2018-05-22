import React from 'react';
import PropTypes from 'prop-types';
import StyledFooterLink from './styled-footer-link';

const FooterLinksSection = ({ menuItem, sectionLevel }) =>
  menuItem.hasPart.parts.map((child) => (
    <StyledFooterLink
      key={child.isPartOf.context.position}
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
