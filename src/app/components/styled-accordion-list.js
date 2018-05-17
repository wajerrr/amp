import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import color from '../styles/color';
import fontFamily from '../styles/font-family';
import typography from '../styles/typography';
import spacings from '../styles/spacings';
import AccordionListItem from './accordion-list';

const wrapperSectionClassName = css`
  font-family: ${fontFamily.sans};
  font-size: ${typography.sizeStep['-1']};
  z-index: 99999;
  border-bottom: 1px solid ${color.cardiff};
  &[expanded] {
    border-bottom: none;
    & h4 > button {
      transform: rotate(180deg);
    }
  }
  & h4 {
    border: none;
    background-color: transparent;
    font-size: ${typography.sizeStep['1']};
    font-weight: 500;
    padding: ${spacings.s} ${spacings.l};
    color: ${color.kiev};
  }
`;

const StyledAccordionListItem = ({ item }) => (
  <AccordionListItem
    item={item}
    wrapperSectionClassName={wrapperSectionClassName}
  />
);

StyledAccordionListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default StyledAccordionListItem;
