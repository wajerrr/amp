import React from 'react';
import PropTypes from 'prop-types';
import buildComponents from './article-text-builder';

const Article = ({ data }) => (
  <article>
    <h1>{data.canonical.headline}</h1>
    <amp-img
      src={data.canonical.image.main.url.canonical}
      width={data.canonical.image.main.width}
      height={data.canonical.image.main.height}
      layout="responsive"
    />
    {buildComponents(data.canonical.text)}
  </article>
);

Article.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Article;
