import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import spacings from '../styles/spacings';
import fontFamily from '../styles/font-family';
import text from '../styles/typography';
import color from '../styles/color';

const flyTitleClassName = css`
  margin: 0;
  font-size: 1em;
`;

const subHeadlineClassName = css`
  display: block;
  margin: 0 0 ${spacings.xs} 0;
  color: ${color.economist};
  font-family: ${fontFamily.sans};
  font-size: ${text.sizeStep['-1']};
  font-weight: 400;
  letter-spacing: ${text.lineHeight.letterSpacing.sansOnStep['0']};
  line-height: ${text.lineHeight.sansOnStep['0']};
`;

const headlineClassName = css`
  display: block;
  margin: 0 0 ${spacings.m};
  color: ${color.beijing};
  font-family: ${fontFamily.serif};
  font-size: ${text.sizeStep['5']};
  font-weight: 500;
  letter-spacing: ${text.lineHeight.letterSpacing.serifMediumOnStep['5']};
  line-height: ${text.lineHeight.serifMediumOnStep['5']};
`;

const ArticleHeadline = ({ subheadline, children }) => (
  <h1 className={flyTitleClassName}>
    {subheadline && <span className={subHeadlineClassName}>{subheadline}</span>}
    <span className={headlineClassName}>{children}</span>
  </h1>
);

ArticleHeadline.propTypes = {
  subheadline: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ArticleHeadline.defaultProps = {
  subheadline: '',
};

export default ArticleHeadline;
