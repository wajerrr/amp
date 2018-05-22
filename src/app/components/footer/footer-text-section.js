import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import color from '../../styles/color';
import text from '../../styles/typography';
import spacings from '../../styles/spacings';

const StyledText = styled('p')`
  color: ${color.moscow};
  font-size: ${text.sizeStep['-2']};
  margin-bottom: ${spacings.none};
`;

const FooterTextSection = ({ menuItem }) => (
  <StyledText key={menuItem.id}>{menuItem.headline}</StyledText>
);

FooterTextSection.propTypes = {
  menuItem: PropTypes.shape({
    id: PropTypes.string,
    headline: PropTypes.string,
  }).isRequired,
};

export default FooterTextSection;
