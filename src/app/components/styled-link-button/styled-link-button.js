import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import color from '../../styles/color';
import fontFamily from '../../styles/font-family';
import typography from '../../styles/typography';
import spacings from '../../styles/spacings';

const StyledLink = styled('a')`
  background-color: ${color.chicago};
  border: none;
  box-sizing: border-box;
  height: 30px;
  padding: 0 ${spacings.xl};
  text-align: center;
  border-radius: 4px;
  font-size: ${typography.sizeStep['-3']};
  font-family: ${fontFamily.sans};
  margin-left: 3em;
  font-weight: 300;
  line-height: 30px;
  color: ${color.thimphu};
  text-decoration: none;
  &:active {
    background-color: ${color.athens};
  }
`;

const StyledLinkButton = ({ href, className, children }) => (
  <StyledLink className={className} href={href} role="button">
    {children}
  </StyledLink>
);

StyledLinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

StyledLinkButton.defaultProps = {
  className: '',
};

export default StyledLinkButton;
