import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image/image';

const PaywallImage = ({ image, styles }) => (
  <section className={styles.StyledImageWrapper}>
    <Image src={image.src} layout="responsive" alt={image.alt} />
  </section>
);
export default PaywallImage;

PaywallImage.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  styles: PropTypes.shape({}),
};

PaywallImage.defaultProps = {
  styles: {},
};
