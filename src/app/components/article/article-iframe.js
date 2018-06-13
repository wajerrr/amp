import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import PlaceholderImage from '../placheolder-imge/placeholder-image';

const ArticleIframe = ({ src, height }) => (
  <amp-iframe
    height={height}
    layout="fixed-height"
    sandbox="allow-scripts allow-same-origin"
    frameborder="0"
    src={src}
  >
    <Helmet>
      {
        <script
          async={undefined}
          custom-element="amp-iframe"
          src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
        />
      }
    </Helmet>
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
