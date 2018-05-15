import React from 'react';
import PropTypes from 'prop-types';
import StyledLinkButton from './styled-link-button';

const SubscribeButton = ({ customStyles }) => (
  <StyledLinkButton
    buttonProps={{ text: 'Subscribe', url: 'https://econ.st/2bs1gXz' }}
    customStyles={customStyles}
  />
);

SubscribeButton.propTypes = {
  customStyles: PropTypes.shape({}),
};

SubscribeButton.defaultProps = {
  customStyles: {},
};

export default SubscribeButton;
