import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ArticlePublisherMetaData = () => (
  <div
    itemProp="publisher"
    itemScope
    itemType="https://schema.org/Organization"
  >
    <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
      <meta
        itemProp="url"
        content="https://www.economist.com/assets/the-economist-logo.png"
      />
    </div>
    <meta itemProp="name" content="The Economis" />
  </div>
);

const ArticleMetaData = ({ url, dateModified }) => (
  <Fragment>
    <ArticlePublisherMetaData />
    <link itemProp="mainEntityOfPage" href={url.canonical} />
    <meta itemProp="dateModified" content={dateModified} />
  </Fragment>
);

ArticleMetaData.propTypes = {
  url: PropTypes.shape({}).isRequired,
  dateModified: PropTypes.string.isRequired,
};

export default ArticleMetaData;
