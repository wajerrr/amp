import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import color from '../styles/color';
import fontFamily from '../styles/font-family';
import typography from '../styles/typography';
import spacings from '../styles/spacings';

const buttonClassName = (customStyles) => css`
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
  &:active {
    background-color: ${color.athens};
  }
  line-height: 30px;
  color: ${color.thimphu};
  text-decoration: none;
  ${customStyles};
`;

const StyledLinkButton = ({ buttonProps, customStyles }) => (
  <a
    className={buttonClassName(customStyles)}
    href={buttonProps.url}
    role="button"
  >
    {buttonProps.text}
  </a>
);

StyledLinkButton.propTypes = {
  buttonProps: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  customStyles: PropTypes.shape({}),
};

StyledLinkButton.defaultProps = {
  customStyles: {},
};

export default StyledLinkButton;
