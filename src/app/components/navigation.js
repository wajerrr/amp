import React from 'react';
import { css } from 'emotion';
import Logo from './logo';
import SubscribeButton from './subscribe-button';
import IconButton from './icon-button';

const navClassName = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = () => (
  <nav className={navClassName}>
    <Logo />
    <SubscribeButton />
    <IconButton
      onProps="tap:sidebar.toggle"
      icon="hamburgerIconWhite"
      customStyles={{
        marginRight: '0.5em',
      }}
    />
  </nav>
);

export default Navigation;
