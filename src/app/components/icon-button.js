import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import IconClose from '@economist/component-icon/lib/inline-icons/close';
import IconHamburger from '@economist/component-icon/lib/inline-icons/hamburger';
import IconDown from '@economist/component-icon/lib/inline-icons/down';
import color from '../styles/color';

const icons = {
  hamburgerIcon: <IconHamburger />,
  closeIcon: <IconClose />,
  chevronIcon: <IconDown />,
};

const iconButtonClassName = (icon, iconColor, customStyles) => css`
  border: none;
  background: none;
  padding: 0;
  ${customStyles};
  & svg {
    fill: ${color[iconColor] || color.thimphu};
    height: 34px;
    width: 34px;
  }
`;

const IconButton = ({ onProps, icon, iconColor, customStyles }) => (
  <button
    on={onProps}
    className={iconButtonClassName(icon, iconColor, customStyles)}
    tabIndex="0"
  >
    {icons[icon]}
  </button>
);

IconButton.propTypes = {
  onProps: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  customStyles: PropTypes.shape({}),
};

IconButton.defaultProps = {
  customStyles: {},
  iconColor: '',
};

export default IconButton;
