import React from 'react';
import PropTypes from 'prop-types';
import TitleWithAccordionList from './section-list';
import HeaderSection from './section-header';
import HeaderLink from './section-header-link';
import { hasChildren } from './accordion-list';

const NestedAccordionList = ({ title, list, styles }) => (
  <amp-accordion id="accordion">
    <section className={styles.StyledSection}>
      <HeaderSection title={title} styles={styles} />
      <div>
        {list.hasPart.parts.map(
          (listItem) =>
            hasChildren(listItem) ? (
              <TitleWithAccordionList
                title={listItem.headline}
                list={listItem}
                styles={styles}
                key={listItem.id}
              />
            ) : (
              <HeaderLink link={listItem} styles={styles} key={listItem.id} />
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
