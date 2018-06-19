import React from 'react';
import PropTypes from 'prop-types';
import HeaderSection from './section-header';
import StyledLink from '../styled-link/styled-link';

const TitleWithAccordionList = ({ title, list, styles }) => (
  <amp-accordion id="accordion">
    <section className={styles.StyledSection}>
      <HeaderSection title={title} styles={styles} />
      <div>
        {list.hasPart.parts.map((listItem) => (
          <StyledLink
            href={listItem.url.canonical}
            className={styles.StyledLink}
            key={listItem.id}
          >
            {listItem.headline}
          </StyledLink>
        ))}
      </div>
    </section>
  </amp-accordion>
);

TitleWithAccordionList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

TitleWithAccordionList.defaultProps = {
  styles: {},
};

export default TitleWithAccordionList;
