import React from 'react';
import PropTypes from 'prop-types';
import slug from '../../../server/utils/slug';
import getUrl from '../../../server/utils/get-url';

const TYPE_BLOG = 'blog_post';
const TYPE_ARTICLE = 'article';
const getSection = ({ print, publication }) => {
  let section = print && print.section && print.section.headline;
  if (!section) {
    section = publication[0] && publication[0].headline;
  }
  return section || '';
};
const getContentType = (tegType) =>
  ({ mtblog: TYPE_BLOG, article: TYPE_ARTICLE }[tegType]);
const getPageName = ({ contentType, section, headline }) => {
  let pageName;
  switch (contentType) {
    case TYPE_BLOG: {
      pageName = [contentType, slug(section), slug(headline)].join('|');
      break;
    }
    case TYPE_ARTICLE: {
      pageName = [
        slug(section),
        contentType,
        slug(section),
        slug(headline),
      ].join('|');
      break;
    }
    default: {
      pageName = slug(headline);
    }
  }
  return pageName;
};
const getPropSection = ({ contentType, section }) => {
  let propSection;
  if (contentType === TYPE_BLOG) {
    propSection = `blogs_${slug(section)}`;
  } else {
    propSection = slug(section);
  }
  return propSection;
};
const getPropTitle = ({ contentType, headline }) => {
  let propTitle;
  if (contentType === TYPE_BLOG) {
    propTitle = `blog|${slug(headline)}`;
  } else {
    propTitle = slug(headline);
  }
  return propTitle;
};
const articlePublishDate = (date) => {
  // Returns the date the article was published in this format yyyy|mm|dd
  const doubleDigitLimit = 10;
  return date instanceof Date
    ? [
        date.getFullYear(), // getMonth() returns 0-11
        date.getMonth() + 1 < doubleDigitLimit
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1,
        date.getDate() < doubleDigitLimit
          ? `0${date.getDate()}`
          : date.getDate(),
      ].join('|')
    : '';
};
/* eslint-disable no-template-curly-in-string */
/**
 * Returns config for amp-analytics.
 * Result of this function will be merged with response from /analytics.config.json
 */
const getAnalyticsData = ({
  headline,
  publication = [],
  print,
  tegType,
  datePublished,
}) => {
  const section = getSection({ print, publication });
  const contentType = getContentType(tegType);
  const pageName = getPageName({ contentType, section, headline });
  const propSection = getPropSection({ contentType, section });
  const propTitle = getPropTitle({ contentType, headline });
  const propPublishDate = articlePublishDate(new Date(datePublished));

  return {
    vars: {
      pageName,
    },
    extraUrlParams: {
      subsection: slug(section),

      prop1: propSection,
      eVar1: propSection,

      prop4: contentType,
      eVar4: contentType,

      prop5: propTitle,
      eVar5: propTitle,

      prop31: propPublishDate,
      eVar31: propPublishDate,

      prop32: '${ampdocUrl}',
      eVar32: '${ampdocUrl}',
    },
    extraUrlParamsReplaceMap: {
      prop: 'c',
      eVar: 'v',
    },
  };
};

/* eslint-disable react/no-danger */
const Analytics = ({
  data: {
    article: { headline, publication, print, tegType, datePublished } = {},
  },
}) => (
  <amp-analytics
    type="adobeanalytics"
    config={getUrl('/analytics.config.json')}
    data-credentials="include"
  >
    <script
      type="application/json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          getAnalyticsData({
            headline,
            publication,
            print,
            tegType,
            datePublished,
          })
        ),
      }}
    />
  </amp-analytics>
);

Analytics.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Analytics;
