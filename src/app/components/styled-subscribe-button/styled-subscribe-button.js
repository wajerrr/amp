import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import spacings from '../../styles/spacings';
import StyledLinkButton from '../styled-link-button/styled-link-button';
import color from '../../styles/color';

const StyledSubscribeButton = ({ className, children }) => (
  <StyledLinkButton className={className} href="https://econ.st/2bs1gXz">
    {children || 'Subscribe'}
  </StyledLinkButton>
);

const LargeSubscribeButton = styled(StyledSubscribeButton)`
  display: block;
  margin: ${spacings.l};
  font-size: 18px;
  width: ${`calc(100% - ${spacings.xxxl})`};
  padding: ${spacings.s};
  height: fit-content;
  line-height: 1.4;
`;

const LargeSubscribeButtonInvertedStyles = styled(LargeSubscribeButton)`
  background-color: transparent;
  border: 1px solid ${color.chicago};
  color: ${color.chicago};
  &:active {
    background-color: transparent;
  }
`;

StyledSubscribeButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

StyledSubscribeButton.defaultProps = {
  className: '',
  children: '',
};

export default StyledSubscribeButton;
export { LargeSubscribeButton, LargeSubscribeButtonInvertedStyles };
