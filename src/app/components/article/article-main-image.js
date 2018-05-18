import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import spacings from '../../styles/spacings';

const StyledImageContainer = styled('div')`
  margin-bottom: ${spacings.xl};
`;

const StyledImageContainerNoSize = styled(StyledImageContainer)`
  position: relative;
  width: 100%;
  height: 200px;
  img {
    object-fit: contain;
  }
`;

const ArticleMainImage = ({ src, width, height }) => {
  const hasSize = width && height;
  const ImageContainer = hasSize
    ? StyledImageContainer
    : StyledImageContainerNoSize;

  return (
    <ImageContainer>
      <amp-img
        src={src}
        width={width}
        height={height}
        layout={hasSize ? 'responsive' : 'fill'}
      />
    </ImageContainer>
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
