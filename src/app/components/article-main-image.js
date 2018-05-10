import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import spacings from '../styles/spacings';

const mainImageContClassName = css`
  margin-bottom: ${spacings.l};
`;

const ArticleMainImage = ({ src, width = 'auto', height = 'auto' }) => (
  <div className={mainImageContClassName}>
    <amp-img src={src} width={width} height={height} layout="responsive" />
  </div>
);

ArticleMainImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ArticleMainImage;
