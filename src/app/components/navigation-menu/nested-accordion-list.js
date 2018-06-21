import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './section-header';
import AccordionListItem from './accordion-list-item';

const NestedAccordionList = ({ title, list, styles }) => (
  <amp-accordion id="accordion">
    <section className={styles.StyledSection}>
      <SectionHeader title={title} styles={styles} />
      <div key={list.id}>
        {list.hasPart.parts.map((listItem) => (
          <AccordionListItem
            item={listItem}
            styles={styles}
            key={listItem.id}
          />
        ))}
      </div>
    </section>
  </amp-accordion>
);

NestedAccordionList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

NestedAccordionList.defaultProps = {
  styles: {},
};

export default NestedAccordionList;
