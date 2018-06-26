import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image/image';

const PaywallImage = ({ data, styles }) => (
  <section className={styles.StyledImageWrapper}>
    <Image src={data.content.src} layout="responsive" alt={data.content.alt} />
  </section>
);
export default PaywallImage;

PaywallImage.propTypes = {
  data: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

PaywallImage.defaultProps = {
  styles: {},
};
