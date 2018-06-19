import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from '../styled-link/styled-link';
import TitleWithAccordionList from './section-list';

const HeaderLink = ({ link, styles }) =>
  link.url ? (
    <StyledLink href={link.url.canonical} className={styles.StyledHeadLink}>
      {link.headline}
    </StyledLink>
  ) : (
    <TitleWithAccordionList title={link.headline} list={link} styles={styles} />
  );

HeaderLink.propTypes = {
  link: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

HeaderLink.defaultProps = {
  styles: {},
};

export default HeaderLink;
