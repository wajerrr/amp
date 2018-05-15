import React from 'react';
import PropTypes from 'prop-types';
import StyledLinkButton from './styled-link-button';
import spacings from '../styles/spacings';

const sizesLarge = {
  display: 'block',
  margin: spacings.l,
  fontSize: '18px',
  width: `calc(100% - ${spacings.xxxl})`,
  padding: spacings.s,
  height: 'fit-content',
  lineHeight: '1.4',
};

const SubscribeButton = ({ largeSize }) => (
  <StyledLinkButton
    buttonProps={{ text: 'Subscribe', url: 'https://econ.st/2bs1gXz' }}
    customStyles={largeSize ? sizesLarge : {}}
  />
);

SubscribeButton.propTypes = {
  largeSize: PropTypes.bool,
};

SubscribeButton.defaultProps = {
  largeSize: false,
};

export default SubscribeButton;
