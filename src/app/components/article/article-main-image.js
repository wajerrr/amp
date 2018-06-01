import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import spacings from '../../styles/spacings';
import Image from '../image/image';

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
      <Image
        layout={hasSize ? 'responsive' : 'fill'}
        width={width}
        height={height}
        src={src}
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
