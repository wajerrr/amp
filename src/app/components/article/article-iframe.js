import React from 'react';
import PropTypes from 'prop-types';

import PlaceholderImage from '../placeholder-image/placeholder-image';

const ArticleIframe = ({ src, height }) => (
  <amp-iframe
    height={height}
    layout="fixed-height"
    sandbox="allow-scripts allow-same-origin"
    frameborder="0"
    src={src}
  >
    <PlaceholderImage containerHeight={height} />
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
