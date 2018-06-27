import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image/image';

const PaywallImage = ({ styles }) => (
  <section className={styles.StyledImageWrapper}>
    <Image
      src="https://i.piano.io/managedservices/theeconomist/regwall-product.png"
      layout="responsive"
      alt="paywall-image"
    />
  </section>
);
export default PaywallImage;

PaywallImage.propTypes = {
  styles: PropTypes.shape({}),
};

PaywallImage.defaultProps = {
  styles: {},
};
