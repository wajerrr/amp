import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from '../styled-link/styled-link';

const SectionHeaderLink = ({ link, styles }) => (
  <StyledLink href={link.url.canonical} className={styles.StyledHeadLink}>
    {link.headline}
  </StyledLink>
);

SectionHeaderLink.propTypes = {
  link: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

SectionHeaderLink.defaultProps = {
  styles: {},
};

export default SectionHeaderLink;
