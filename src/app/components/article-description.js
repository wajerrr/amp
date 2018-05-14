import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import spacings from '../styles/spacings';
import fontFamily from '../styles/font-family';
import text from '../styles/typography';
import color from '../styles/color';

const rubricClassName = css`
  color: ${color.beijing};
  font-family: ${fontFamily.serif};
  font-size: ${text.sizeStep['0']};
  margin: 0 0 ${spacings.m};
  font-style: italic;
  line-height: ${text.lineHeight.serifMediumOnStep['0']};
`;

const ArticleDescription = ({ children }) => (
  <p className={rubricClassName}>{children}</p>
);

ArticleDescription.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArticleDescription;
