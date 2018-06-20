import React from 'react';
import PropTypes from 'prop-types';
import SingleAccordionList from './single-accordion-list';
import SectionHeader from './section-header';
import SectionHeaderLink from './section-header-link';
import { hasChildren } from './accordion-list-item';

const NestedAccordionList = ({ title, list, styles }) => (
  <amp-accordion id="accordion">
    <section className={styles.StyledSection}>
      <SectionHeader title={title} styles={styles} />
      <div>
        {list.hasPart.parts.map(
          (listItem) =>
            hasChildren(listItem) ? (
              <SingleAccordionList
                title={listItem.headline}
                list={listItem}
                styles={styles}
                key={listItem.id}
              />
            ) : (
              <SectionHeaderLink
                link={listItem}
                styles={styles}
                key={listItem.id}
              />
            )
        )}
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
