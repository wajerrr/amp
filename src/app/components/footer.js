import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import color from '../styles/color';
import fontFamily from '../styles/font-family';
import spacings from '../styles/spacings';
import FooterSocialMenu from './footer-social-menu';
import FooterLinksSection from './footer-links-section';
import FooterTextSection from './footer-text-section';

const footerClassName = css`
  overflow: hidden;
  padding: ${spacings.l};
  font-family: ${fontFamily.sans};
  background-color: ${color.beijing};
  border-top: 0.4rem solid ${color.economist};
`;
const footerSectionClassName = css`
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
  <footer className={footerClassName}>
    {parts.map((parent, sectionLevel) => {
      const Section = getFooterSection(parent);
      return (
        <section key={parent.id} className={footerSectionClassName}>
          <Section menuItem={parent} sectionLevel={sectionLevel} />
        </section>
      );
    })}
  </footer>
);

Footer.propTypes = {
  data: PropTypes.shape({
    hasPart: PropTypes.shape({}),
  }).isRequired,
};

export default Footer;
