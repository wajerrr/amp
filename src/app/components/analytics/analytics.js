import React from 'react';
import PropTypes from 'prop-types';
import slug from '../../../server/utils/slug';

const getSection = ({ print, publication }) => {
  let section = print && print.section && print.section.headline;
  if (!section) {
    section = publication[0] && publication[0].headline;
  }
  return section;
};
const getContentType = (tegType) =>
  ({ mtblog: 'blog_post', article: 'article' }[tegType]);
const getPageName = ({ type, section, headline }) => {
  let pageName;
  switch (type) {
    case 'blog_post': {
      pageName = [type, slug(section), slug(headline)].join('|');
      break;
    }
    case 'article': {
      pageName = [slug(section), type, slug(section), slug(headline)].join('|');
      break;
    }
    default: {
      pageName = slug(headline);
      break;
    }
  }
  return pageName;
};
const getPropSection = ({ type, section }) => {
  let propSection;
  if (type === 'blog_post') {
    propSection = `blogs_${slug(section)}`;
  } else {
    propSection = slug(section);
  }
  return propSection;
};
const getPropTitle = ({ type, headline }) => {
  let propTitle;
  if (type === 'blog_post') {
    propTitle = `blog|${slug(headline)}`;
  } else {
    propTitle = slug(headline);
  }
  return propTitle;
};
function articlePublishDate(date) {
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
}
/* eslint-disable no-template-curly-in-string */
const getAnalyticsData = ({
  headline,
  publication,
  print,
  tegType,
  datePublished,
}) => {
  const section = getSection({ print, publication });
  const type = getContentType(tegType);
  const pageName = getPageName({ type, section, headline });
  const propSection = getPropSection({ type, section });
  const propTitle = getPropTitle({ type, headline });

  return {
    vars: {
      pageName,
    },
    extraUrlParams: {
      subsection: slug(section),

      prop1: propSection,
      eVar1: propSection,

      prop4: type,
      eVar4: type,

      prop5: propTitle,
      eVar5: propTitle,

      prop31: articlePublishDate(new Date(datePublished)),
      eVar31: articlePublishDate(new Date(datePublished)),

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
    article: { headline, publication = [], print, tegType, datePublished } = {},
  },
}) => (
  <amp-analytics
    type="adobeanalytics"
    config="/analytics.config.json"
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
