import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Logo from './logo';
import SubscribeButton from './subscribe-button';
import IconButton from './icon-button';
import typography from '../styles/typography';
import spacings from '../styles/spacings';

const navClassName = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${typography.sizeStep['1']};
`;

const Navigation = ({ menuContainerId }) => (
  <nav className={navClassName}>
    <Logo />
    <SubscribeButton />
    <IconButton
      onProps={`tap:${menuContainerId}.toggle`}
      icon="hamburgerIcon"
      iconColor="thimphu"
      customStyles={{
        marginRight: spacings.l,
      }}
    />
  </nav>
);

Navigation.propTypes = {
  menuContainerId: PropTypes.string.isRequired,
};

export default Navigation;
