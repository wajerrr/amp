import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import spacings from '../styles/spacings';

const mainImageContClassName = css`
  margin-bottom: ${spacings.xl};
`;

const mainImageNoSizeContClassName = css`
  ${mainImageContClassName};
  position: relative;
  width: 100%;
  height: 200px;
  img {
    object-fit: contain;
  }
`;

const ArticleMainImage = ({ src, width, height }) => {
  const hasSize = width && height;

  return (
    <div
      className={
        hasSize ? mainImageContClassName : mainImageNoSizeContClassName
      }
    >
      <amp-img
        src={src}
        width={width}
        height={height}
        layout={hasSize ? 'responsive' : 'fill'}
      />
    </div>
  );
};

ArticleMainImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

ArticleMainImage.defaultProps = {
  width: 0,
  height: 0,
};

export default ArticleMainImage;
