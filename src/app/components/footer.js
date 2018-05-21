import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import color from '../styles/color';
import fontFamily from '../styles/font-family';
import spacings from '../styles/spacings';
import text from '../styles/typography';
import FooterSocialMenu from './footer-social-menu';
import StyledFooterLink from './footer-styled-link';

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
const textClassName = css`
  color: ${color.moscow};
  font-size: ${text.sizeStep['-2']};
  margin-bottom: ${spacings.none};
`;

const Footer = ({
  data: {
    hasPart: { parts },
  },
}) => (
  <footer className={footerClassName}>
    {parts.map(
      (parent, sectionLevel) =>
        parent.id === 'menu-unicorn-keep-updated' ? (
          <section key={parent.id} className={footerSectionClassName}>
            <FooterSocialMenu menuItems={parent} />
          </section>
        ) : (
          <section key={parent.id} className={footerSectionClassName}>
            {parent.hasPart ? (
              parent.hasPart.parts.map((child) => (
                <StyledFooterLink
                  key={child.isPartOf.context.position}
                  link={child}
                  sectionLevel={sectionLevel}
                >
                  {child.headline}
                </StyledFooterLink>
              ))
            ) : (
              <p key={parent.id} className={textClassName}>
                {parent.headline}
              </p>
            )}
          </section>
        )
    )}
  </footer>
);

Footer.propTypes = {
  data: PropTypes.shape({
    hasPart: PropTypes.shape({}),
  }).isRequired,
};

export default Footer;
