import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import color from '../../styles/color';
import fontFamily from '../../styles/font-family';
import typography from '../../styles/typography';
import spacings from '../../styles/spacings';
import AccordionListItem from './accordion-list';

const sectionStyles = css`
  font-family: ${fontFamily.sans};
  font-size: ${typography.sizeStep['-1']};
  z-index: 99999;
  border-bottom: 1px solid ${color.cardiff};
  &[expanded] {
    border-bottom: none;
    & h4 svg {
      transform: rotate(180deg);
    }
  }
  h4[aria-expanded='false'] svg {
    transform: none;
  }
`;

const headStyles = css`
  border: none;
  background-color: transparent;
  font-size: ${typography.sizeStep['1']};
  font-weight: 500;
  padding: ${spacings.s} ${spacings.l};
  color: ${color.kiev};
  outline-offset: -3px;
`;

const headerLinkStyles = css`
  background-color: transparent;
  font-size: ${typography.sizeStep['0']};
  border-bottom: 1px solid ${color.cardiff};
  font-weight: 500;
  padding: ${spacings.s} ${spacings.l};
  color: ${color.kiev};
  display: block;
  &:visited {
    color: ${color.kiev};
    border-bottom: 1px solid ${color.cardiff};
  }
`;

const iconStyles = css`
  bottom: -3px;
  right: ${spacings.l};
  position: absolute;
  & svg {
    height: 34px;
    width: 34px;
    fill: ${color.chicago};
  }
`;

const linkStyles = css`
  display: block;
  text-decoration: none;
  color: ${color.kiev};
  padding: ${spacings.m} ${spacings.l};
  text-indent: ${spacings.l};
  border-bottom: none;
  font-family: ${fontFamily.sans}
  &:active {
    background-color: ${color.cardiff};
  }
  &:last-of-type {
    border-bottom: 1px solid ${color.cardiff};
  }
`;

const StyledAccordionListItem = ({ item }) => (
  <AccordionListItem
    item={item}
    styles={{
      StyledSection: sectionStyles,
      StyledHead: headStyles,
      StyledHeadLink: headerLinkStyles,
      StyledIconButton: iconStyles,
      StyledLink: linkStyles,
    }}
  />
);

StyledAccordionListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default StyledAccordionListItem;
