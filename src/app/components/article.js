import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import ArticleHeadline from './article-headline';
import ArticleDescription from './article-description';
import ArticleMainImage from './article-main-image';
import ArticlePublicationDetails from './article-publication-details';
import buildComponents from './article-text-builder';
import spacings from '../styles/spacings';
import fontFamily from '../styles/font-family';
import typography from '../styles/typography';

const articleClassName = css`
  font-size: ${typography.baseSize};
  font-size: 1rem;
  font-size: 1em;
  line-height: ${typography.lineHeight.sansOnStep['0']};
  padding: ${spacings.s} 0 0 0;

  figure {
    margin: 0;
  }
`;

const textContClassName = css`
  margin-top: ${spacings.x};
  font-family: ${fontFamily.serif};
  font-size: ${typography.sizeStep['0']};
  line-height: 1.6;
`;

const Article = ({
  data: {
    canonical: {
      subheadline,
      headline,
      description,
      image,
      datePublished,
      byline,
      text,
    },
  },
}) => (
  <article className={articleClassName}>
    <ArticleHeadline subheadline={subheadline}>{headline}</ArticleHeadline>
    {description && <ArticleDescription>{description}</ArticleDescription>}
    {image &&
      image.main && (
        <ArticleMainImage
          src={image.main.url.canonical}
          width={image.main.width}
          height={image.main.height}
        />
      )}
    <ArticlePublicationDetails datePublished={datePublished} byline={byline} />
    <div className={textContClassName}>{buildComponents(text)}</div>
    <ArticlePublicationDetails datePublished={datePublished} byline={byline} />
  </article>
);

Article.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Article;
