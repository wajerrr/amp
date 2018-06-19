import React from 'react';
import PropTypes from 'prop-types';
import IconDown from '@economist/component-icon/lib/inline-icons/down';

const HeaderSection = ({ title, styles }) => (
  <h4 className={styles.StyledHead}>
    <span>{title}</span>
    <IconDown className={styles.StyledIconButton} />
  </h4>
);

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.shape({}),
};

HeaderSection.defaultProps = {
  styles: {},
};

export default HeaderSection;
