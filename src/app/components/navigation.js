import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Logo from './logo';
import StyledSubscribeButton from './styled-subscribe-button';
import StyledIconButton from './styled-icon-button';
import typography from '../styles/typography';
import spacings from '../styles/spacings';
import color from '../styles/color';

const StyledNav = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${typography.sizeStep['1']};
`;

const StyledHamburgerIcon = styled(StyledIconButton)`
  margin-right: ${spacings.l};
`;

const Navigation = ({ menuContainerId }) => (
  <StyledNav>
    <Logo />
    <StyledSubscribeButton />
    <StyledHamburgerIcon
      onProps={`tap:${menuContainerId}.toggle`}
      icon="hamburger"
      iconColor={color.thimphu}
    />
  </StyledNav>
);

Navigation.propTypes = {
  menuContainerId: PropTypes.string.isRequired,
};

export default Navigation;
