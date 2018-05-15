import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

// This will be replaced by the correct Icon implementation when merged to master.
const icons = {
  hamburgerIconWhite:
    'data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2048%2048%22%20style%3D%22fill%3A%23FFFFFF%3B%22%20xml%3Aspace%3D%22preserve%22%20height%3D%22%22%20width%3D%22%22%3E%0A%20%20%3Cpath%20d%3D%22M36%2C32H12v-2.7h24V32z%20M36%2C25.3H12v-2.7h24V25.3z%20M36%2C18.7H12V16h24V18.7z%22%2F%3E%0A%3C%2Fsvg%3E',
  closeIconKiev:
    'data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2048%2048%22%20style%3D%22fill%3A%23383e42%3B%22%20xml%3Aspace%3D%22preserve%22%20height%3D%22%22%20width%3D%22%22%3E%0D%0A%09%20%3Cpath%20d%3D%22M35.2%2C15.1l-2.3-2.3L24%2C21.7l-8.9-8.9l-2.3%2C2.3l8.9%2C8.9l-8.9%2C8.9l2.3%2C2.3l8.9-8.9l8.9%2C8.9%0D%0A%20%09%09l2.3-2.3L26.3%2C24L35.2%2C15.1z%22%2F%3E%0D%0A%3C%2Fsvg%3E',
};

const menuButtonClassName = (icon, customStyles) => css`
  background: url(${icons[icon]});
  background-repeat: no-repeat;
  height: 31px;
  width: 31px;
  border: none;
  ${customStyles};
`;

const IconButton = ({ onProps, icon, customStyles }) => (
  <button
    on={onProps}
    className={menuButtonClassName(icon, customStyles)}
    tabIndex="0"
  />
);

IconButton.propTypes = {
  onProps: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  customStyles: PropTypes.shape({}),
};

IconButton.defaultProps = {
  customStyles: {},
};

export default IconButton;
