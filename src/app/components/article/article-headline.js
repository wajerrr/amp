import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { spacings, fontFamily, text, color } from '../../styles';

const StyledArticleHeadline = styled('h1')`
  margin: ${spacings.none};
  font-size: 1em;
`;

const StyledSubHeadline = styled('span')`
  display: block;
  margin: 0 0 ${spacings.xs} 0;
  color: ${color.economist};
  font-family: ${fontFamily.sans};
  font-size: ${text.sizeStep['-1']};
  font-weight: 400;
  letter-spacing: ${text.lineHeight.letterSpacing.sansOnStep['0']};
  line-height: ${text.lineHeight.sansOnStep['0']};
`;

const StyledHeadline = styled('span')`
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
  <StyledArticleHeadline>
    {subheadline && <StyledSubHeadline>{subheadline}</StyledSubHeadline>}
    <StyledHeadline itemProp="headline">{children}</StyledHeadline>
  </StyledArticleHeadline>
);

ArticleHeadline.propTypes = {
  subheadline: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ArticleHeadline.defaultProps = {
  subheadline: '',
};

export default ArticleHeadline;
