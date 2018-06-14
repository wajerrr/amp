import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import color from '../../styles/color';
import fontFamily from '../../styles/font-family';
import spacings from '../../styles/spacings';
import FooterSocialMenu from './footer-social-menu';
import FooterLinksSection from './footer-links-section';
import FooterTextSection from './footer-text-section';
import pageSizes from '../../styles/page-sizes';

const StyledFooterContainer = styled('footer')`
  overflow: hidden;
  padding: ${spacings.l};
  font-family: ${fontFamily.sans};
  background-color: ${color.beijing};
  border-top: 0.4rem solid ${color.economist};
  max-width: calc(${pageSizes.maxPageSize} - 2 * ${spacings.l});
  margin: 0 auto;
`;

const StyledFooterSection = styled('section')`
  border-bottom: 1px solid ${color.moscow};
  display: flex;
  flex-wrap: wrap;
  &:last-of-type {
    border: none;
  }
`;

const getFooterSection = (parent) => {
  let section = FooterTextSection;
  if (parent.id === 'menu-unicorn-keep-updated') {
    section = FooterSocialMenu;
  } else if (parent.hasPart) {
    section = FooterLinksSection;
  }
  return section;
};

const Footer = ({
  data: {
    hasPart: { parts },
  },
}) => (
  <StyledFooterContainer>
    {parts.map((parent, sectionLevel) => {
      const Section = getFooterSection(parent);
      return (
        <StyledFooterSection key={parent.id}>
          <Section menuItem={parent} sectionLevel={sectionLevel} />
        </StyledFooterSection>
      );
    })}
  </StyledFooterContainer>
);

Footer.propTypes = {
  data: PropTypes.shape({
    hasPart: PropTypes.shape({}),
  }).isRequired,
};

export default Footer;
