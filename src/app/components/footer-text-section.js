import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import color from '../styles/color';
import text from '../styles/typography';
import spacings from '../styles/spacings';

const textClassName = css`
  color: ${color.moscow};
  font-size: ${text.sizeStep['-2']};
  margin-bottom: ${spacings.none};
`;

const FooterTextSection = ({ menuItem }) => (
  <p key={menuItem.id} className={textClassName}>
    {menuItem.headline}
  </p>
);

FooterTextSection.propTypes = {
  menuItem: PropTypes.shape({
    id: PropTypes.string,
    headline: PropTypes.string,
  }).isRequired,
};

export default FooterTextSection;
