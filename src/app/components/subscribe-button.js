import React from 'react';
import StyledLinkButton from './styled-link-button';

const SubscribeButton = ({ customStyles }) => (
  <StyledLinkButton
    buttonProps={{ text: 'Subscribe', url: 'https://econ.st/2bs1gXz' }}
    customStyles={customStyles}
  />
);

export default SubscribeButton;
