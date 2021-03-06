import React from 'react';
import { PropTypes } from 'prop-types';

import baseConfig from '../../../server/config/economist';
import pageSizes from '../../styles/page-sizes';
import spacings from '../../styles/spacings';

const defaultServicePath = '/sites/default/files/imagecache/';

const getSrcset = (
  imgURL,
  baseUrl = baseConfig.domain,
  servicePath = defaultServicePath
) => {
  const imgId = imgURL.split(baseUrl)[1];
  return imgId
    ? `https://${baseUrl}${servicePath}200-width${imgId} 200w,
https://${baseUrl}${servicePath}300-width${imgId} 300w,
https://${baseUrl}${servicePath}400-width${imgId} 400w,
https://${baseUrl}${servicePath}640-width${imgId} 640w,
https://${baseUrl}${servicePath}800-width${imgId} 800w,
https://${baseUrl}${servicePath}1000-width${imgId} 1000w,
https://${baseUrl}${servicePath}1200-width${imgId} 1200w,
https://${baseUrl}${servicePath}1280-width${imgId} 1280w,
https://${baseUrl}${servicePath}1600-width${imgId} 1600w`
    : undefined;
};

const padding = `2 * ${spacings.s}`;

export const fullWidthSizes = `(min-width: ${pageSizes.maxPageSize}) calc(${
  pageSizes.maxPageSize
} -  ${padding}), calc(100vw - ${padding})`;

export const halfWidthSizes = `(min-width: ${pageSizes.maxPageSize}) calc(${
  pageSizes.maxPageSize
} / 2 - ${padding}), calc(50vw - ${padding})`;

const Image = ({ alt, layout, width, height, src, sizes }) => {
  const srcset = getSrcset(src);
  return (
    <amp-img
      alt={alt}
      layout={layout}
      width={width || 1600}
      height={height || 900}
      src={src}
      srcset={srcset}
      sizes={srcset && sizes}
    />
  );
};

Image.defaultProps = {
  layout: 'responsive',
  alt: '',
  sizes: fullWidthSizes,
  height: 900,
  width: 1600,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  sizes: PropTypes.string,
  layout: PropTypes.oneOf(['responsive', 'fill']),
};

export default Image;
