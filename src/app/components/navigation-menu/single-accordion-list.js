import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './section-header';
import StyledLink from '../styled-link/styled-link';

const SingleAccordionList = ({ title, list, styles }) => (
  <amp-accordion id="accordion">
    <section className={styles.StyledSection}>
      <SectionHeader title={title} styles={styles} />
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

SingleAccordionList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

SingleAccordionList.defaultProps = {
  styles: {},
};

export default SingleAccordionList;
