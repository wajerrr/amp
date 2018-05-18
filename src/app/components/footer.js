import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import color from '../styles/color';
import fontFamily from '../styles/font-family';
import spacings from '../styles/spacings';
import text from '../styles/typography';

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
const footerLinkClassName = css`
  text-decoration: none;
  display: inline-block;
  padding: ${spacings.l} 0;
  width: 50%;
  &:active {
    opacity: 0.3;
  }
`;
const textClassName = css`
  color: ${color.moscow};
  font-size: ${text.sizeStep['-2']};
  margin-bottom: 0;
`;
const linkColors = (sectionLevel) => css`
  color: ${sectionLevel === 0 ? color.thimphu : color.london};
`;

const Footer = ({
  data: {
    hasPart: { parts },
  },
}) => (
  <footer className={footerClassName}>
    {parts.map((parent, sectionLevel) => (
      <section key={parent.id} className={footerSectionClassName}>
        {parent.hasPart ? (
          parent.hasPart.parts.map((child) => (
            <a
              key={child.headline}
              className={`${footerLinkClassName} ${linkColors(sectionLevel)}`}
              href={child.url.canonical}
            >
              {child.headline}
            </a>
          ))
        ) : (
          <p key={parent.id} className={textClassName}>
            {parent.headline}
          </p>
        )}
      </section>
    ))}
  </footer>
);

Footer.propTypes = {
  data: PropTypes.shape({
    hasPart: PropTypes.shape({}),
  }).isRequired,
};

export default Footer;
