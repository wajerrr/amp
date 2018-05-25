import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import IconClose from '@economist/component-icon/lib/inline-icons/close';
import IconHamburger from '@economist/component-icon/lib/inline-icons/hamburger';
import IconDown from '@economist/component-icon/lib/inline-icons/down';
import color from '../../styles/color';

const icons = {
  hamburger: <IconHamburger />,
  close: <IconClose />,
  chevron: <IconDown />,
};

const StyledButton = styled('button', {
  shouldForwardProp: (prop) =>
    ['className', 'on', 'tabIndex', 'key', 'children', 'aria-label'].includes(
      prop
    ),
})`
  border: none;
  background: none;
  padding: 0;
  & svg {
    fill: ${(props) => props.iconColor || color.thimphu};
    height: 34px;
    width: 34px;
  }
`;

const StyledIconButton = ({
  onProps,
  icon,
  iconColor,
  className,
  ariaLabel,
}) => (
  <StyledButton
    on={onProps}
    className={className}
    tabIndex="0"
    iconColor={iconColor}
    aria-label={ariaLabel}
  >
    {icons[icon]}
  </StyledButton>
);

StyledIconButton.propTypes = {
  onProps: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

StyledIconButton.defaultProps = {
  iconColor: '',
  className: '',
  ariaLabel: '',
};

export default StyledIconButton;
