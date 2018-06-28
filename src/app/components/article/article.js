import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { spacings, fontFamily, text as typography } from '../../styles';
import ArticleHeadline from './article-headline';
import ArticleDescription from './article-description';
import ArticleMainImage from './article-main-image';
import StyledArticlePublicationDetails from './article-publication-details';
import buildArticleText from './article-text-builder';
import ArticleAboutEconomistLink from './article-about-economist-link';
import ArticleMetaData from './article-meta-data';
import { generateAds, isShortArticle } from '../../utils/adverts';
import StyledInlineAd from '../styled-advert/styled-advert';

const StyledArticleContainer = styled('article')`
  font-size: ${typography.baseSize};
  font-size: 1rem;
  font-size: 1em;
  line-height: ${typography.lineHeight.sansOnStep['0']};
  padding: ${spacings.s} 0 0 0;

  figure {
    margin: 0;
  }
`;

const StyledTextContainer = styled('div')`
  margin-top: ${spacings.x};
  font-family: ${fontFamily.serif};
  font-size: ${typography.sizeStep['0']};
  line-height: 1.6;
`;
const StyledBottomPanel = styled('div')`
  margin-bottom: ${spacings.xl};
`;

const getType = (type) => type[0];

const Article = ({
  data: {
    type,
    url,
    subheadline,
    headline,
    description,
    image,
    datePublished,
    dateModified,
    byline,
    text,
    print,
    publication,
    ad,
  },
}) => (
  <StyledArticleContainer
    itemScope
    itemType={`http://schema.org/${getType(type)}`}
  >
    <ArticleHeadline subheadline={subheadline}>{headline}</ArticleHeadline>
    {description && (
      <ArticleDescription itemProp="description">
        {description}
      </ArticleDescription>
    )}
    {image &&
      image.main && (
        <ArticleMainImage
          src={image.main.url.canonical}
          width={image.main.width}
          height={image.main.height}
        />
      )}
    <StyledArticlePublicationDetails
      datePublished={datePublished}
      byline={byline}
      printSection={print && print.section}
      publication={publication && publication[0]}
      commentsUri={url.comment}
    />
    <StyledTextContainer itemProp="articleBody">
      {buildArticleText(generateAds(text, ad))}
    </StyledTextContainer>
    <StyledBottomPanel>
      <StyledArticlePublicationDetails
        datePublished={datePublished}
        byline={byline}
        printSection={print && print.section}
        publication={publication && publication[0]}
        commentsUri={url.comment}
      />
    </StyledBottomPanel>
    <ArticleAboutEconomistLink />
    <ArticleMetaData url={url} dateModified={dateModified} />
    {!isShortArticle(text.length) && <StyledInlineAd ad={ad} />}
  </StyledArticleContainer>
);
Article.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Article;
