import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import formatDate from '../lib/date-time';
import spacings from '../styles/spacings';
import color from '../styles/color';
import StyledTime from './styled-time';
import text from '../styles/typography';

const dateAuthorSectionClassName = css`
  width: 100%;
  color: ${color.moscow};
  padding: ${spacings.xs} 0;
  margin: ${spacings.s} 0;
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: ${color.cardiff};
  font-size: ${text.sizeStep['-3']};
  line-height: ${text.lineHeight.sansOnStep['-3']};
  font-weight: normal;
  letter-spacing: 0.015em;
`;

const ArticlePublicationDetails = ({ datePublished, byline = '' }) => (
  <div className={dateAuthorSectionClassName}>
    <StyledTime time={formatDate(new Date(datePublished))} />
    {byline && ` | by ${byline}`}
  </div>
);

ArticlePublicationDetails.propTypes = {
  datePublished: PropTypes.string.isRequired,
  byline: PropTypes.string,
};

ArticlePublicationDetails.defaultProps = {
  byline: '',
};

export default ArticlePublicationDetails;
