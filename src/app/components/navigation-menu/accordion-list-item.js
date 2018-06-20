import React from 'react';
import PropTypes from 'prop-types';
import SingleAccordionList from './single-accordion-list';
import SectionHeaderLink from './section-header-link';
import NestedAccordionList from './nested-accordion-list';

export function hasChildren(item) {
  return item.hasPart && item.hasPart.parts && item.hasPart.parts.length > 0;
}
const isNestedList = (list) => list.some(hasChildren);

const AccordionListItem = ({ item, styles }) => {
  switch (true) {
    case hasChildren(item) && isNestedList(item.hasPart.parts):
      return (
        <NestedAccordionList
          title={item.headline}
          key={item.headline}
          list={item}
          styles={styles}
        />
      );
    case hasChildren(item):
      return (
        <SingleAccordionList
          title={item.headline}
          key={item.headline}
          list={item}
          styles={styles}
        />
      );
    default:
      return (
        <SectionHeaderLink link={item} styles={styles} key={item.headline} />
      );
  }
};

AccordionListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

AccordionListItem.defaultProps = {
  styles: {},
};

export default AccordionListItem;
