import React from 'react';
import PropTypes from 'prop-types';

const ArticleIframe = ({ src, height }) => (
  <amp-iframe
    height={height}
    layout="fixed-height"
    sandbox="allow-scripts allow-same-origin"
    frameborder="0"
    src={src}
  >
    {' '}
    <amp-img
      layout="fixed-height"
      height={height}
      src="https://www.economist.com/assets/the-economist-logo.svg"
      placeholder
    />
  </amp-iframe>
);

ArticleIframe.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
};

ArticleIframe.defaultProps = {
  height: 0,
};

export default ArticleIframe;
