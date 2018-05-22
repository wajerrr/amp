import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import IconRight from '@economist/component-icon/lib/inline-icons/right';
import color from '../../styles/color';
import text from '../../styles/typography';
import StyledLink from '../styled-link/styled-link';

const StyledSectionLink = styled(StyledLink)`
  color: ${color.moscow};
  font-size: ${text.sizeStep['-5']};
  letter-spacing: ${text.lineHeight.letterSpacing.sansOnStep['-2']};
  line-height: ${text.lineHeight.sansOnStep['-2']};
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  border-bottom: none;
  &:hover,
  &:active,
  &.visited {
    border-bottom: none;
    color: ${color.chicago};
  }
  svg {
    fill: ${color.moscow};
    width: ${text.sizeStep['2']};
    height: ${text.sizeStep['2']};
    display: inline-block;
    vertical-align: sub;
    &.visited {
      color: ${color.moscow};
    }
  }
`;

const SectionLink = ({ className, href, children }) => (
  <StyledSectionLink className={className} href={href}>
    {children}
    <IconRight />
  </StyledSectionLink>
);

SectionLink.defaultProps = { className: '' };

SectionLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionLink;
