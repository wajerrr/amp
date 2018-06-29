import React from 'react';
import PropTypes from 'prop-types';

const PaywalllTextButton = ({ children, on, styles }) => (
  <span
    className={styles.paywallLoginTextButton}
    tabIndex="0"
    role="button"
    on={on}
  >
    {children}
  </span>
);

export default PaywalllTextButton;

PaywalllTextButton.propTypes = {
  children: PropTypes.string.isRequired,
  on: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    paywallLoginTextButton: PropTypes.string,
  }),
};

PaywalllTextButton.defaultProps = {
  styles: {},
};
