import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import spacings from '../../styles/spacings';
import StyledLinkButton from '../styled-link-button/styled-link-button';

const StyledSubscribeButton = ({ className }) => (
  <StyledLinkButton className={className} href="https://econ.st/2bs1gXz">
    Subscribe
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

StyledSubscribeButton.propTypes = {
  className: PropTypes.string,
};

StyledSubscribeButton.defaultProps = {
  className: '',
};

export default StyledSubscribeButton;
export { LargeSubscribeButton };
