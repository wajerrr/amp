import React from 'react';
import { css } from 'emotion';
import Logo from './logo';
import SubscribeButton from './subscribe-button';

const hamburgerIconWhite =
  'data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2048%2048%22%20style%3D%22fill%3A%23FFFFFF%3B%22%20xml%3Aspace%3D%22preserve%22%20height%3D%22%22%20width%3D%22%22%3E%0A%20%20%3Cpath%20d%3D%22M36%2C32H12v-2.7h24V32z%20M36%2C25.3H12v-2.7h24V25.3z%20M36%2C18.7H12V16h24V18.7z%22%2F%3E%0A%3C%2Fsvg%3E';
const navClassName = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const menuButtonClassName = css`
  background: url(${hamburgerIconWhite});
  background-repeat: no-repeat;
  height: 40px;
  width: 50px;
  border: none;
`;

const Navigation = () => (
  <nav className={navClassName}>
    <Logo />
    <SubscribeButton />
    <button
      on="tap:sidebar.toggle"
      className={menuButtonClassName}
      tabIndex="0"
    />
  </nav>
);

export default Navigation;
