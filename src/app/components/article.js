import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import formatDate from '../lib/date-time';
import buildComponents from './article-text-builder';
import spacings from '../styles/spacings';
import color from '../styles/color';
import fontFamily from '../styles/font-family';
import text from '../styles/typography';

const articleClassName = css`
  font-size: ${text.baseSize};
  font-size: 1rem;
  font-size: 1em;
  line-height: 1.35;
  padding: ${spacings.s} 0 0 0;
`;

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

const rubricClassName = css`
  color: ${color.beijing};
  font-family: ${fontFamily.serif};
  font-size: ${text.sizeStep['0']};
  margin: 0 0 ${spacings.m};
  font-style: italic;
  line-height: ${text.lineHeight.serifMediumOnStep['0']};
`;

const timeClassName = css`
  font-size: ${text.sizeStep['-3']};
  line-height: ${text.lineHeight.sansOnStep['-3']};
  font-weight: normal;
  color: ${color.moscow};
  letter-spacing: 0.015em;
`;

const dateAuthorSectionClassName = css`
  width: 100%;
  padding: ${spacings.xs} 0;
  margin: ${spacings.s} 0;
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: ${color.cardiff};
`;

const textContClassName = css`
  margin-top: ${spacings.x};
  font-family: ${fontFamily.serif};
  font-size: ${text.sizeStep['0']};
  line-height: 1.6;
`;

const mainImageContClassName = css`
  margin-bottom: ${spacings.l};
`;

const bottomSectionClassName = css`
  margin-bottom: ${spacings.l};
`;

const getAuthorSection = (data) => (
  <div className={dateAuthorSectionClassName}>
    <time className={timeClassName}>
      {formatDate(new Date(data.canonical.datePublished))}
    </time>
  </div>
);

const Article = ({ data }) => (
  <article className={articleClassName}>
    <h1 className={flyTitleClassName}>
      {data.canonical.subheadline && (
        <span className={subHeadlineClassName}>
          {data.canonical.subheadline}
        </span>
      )}
      <span className={headlineClassName}>{data.canonical.headline}</span>
    </h1>
    {data.canonical.description && (
      <p className={rubricClassName}>{data.canonical.description}</p>
    )}
    {data.canonical.image &&
      data.canonical.image.main && (
        <div className={mainImageContClassName}>
          <amp-img
            src={data.canonical.image.main.url.canonical}
            width={data.canonical.image.main.width}
            height={data.canonical.image.main.height}
            layout="responsive"
          />
        </div>
      )}
    {getAuthorSection(data)}
    <div className={textContClassName}>
      {buildComponents(data.canonical.text)}
    </div>
    <div className={bottomSectionClassName}>{getAuthorSection(data)}</div>
  </article>
);

Article.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Article;
