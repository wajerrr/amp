import React from 'react';
import { css } from 'emotion';
import { PropTypes } from 'prop-types';
import IconRight from '@economist/component-icon/lib/inline-icons/right';

import color from '../../styles/color';
import text from '../../styles/typography';

const sectionLink = css`
  color: ${color.moscow};
  font-size: ${text.sizeStep['-5']};
  letter-spacing: ${text.lineHeight.letterSpacing.sansOnStep['-2']};
  line-height: ${text.lineHeight.sansOnStep['-2']};
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  &:hover,
  &.visited {
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
  <a className={`${sectionLink} ${className}`} href={href}>
    {children}
    <IconRight />
  </a>
);

SectionLink.defaultProps = { className: '' };

SectionLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionLink;
