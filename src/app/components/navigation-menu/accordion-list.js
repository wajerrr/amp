import React from 'react';
import PropTypes from 'prop-types';
import TitleWithAccordionList from './section-list';
import HeaderLink from './section-header-link';
import NestedAccordionList from './section-nested-list';

export function hasChildren(item) {
  return item.hasPart && item.hasPart.parts && item.hasPart.parts.length > 0;
}
function isNestedList(list) {
  let isNested = false;
  list.forEach((listItem) => {
    if (listItem.hasPart) {
      isNested = hasChildren(listItem);
    }
  });
  return isNested;
}

const AccordionListItem = ({ item, styles }) => {
  switch (true) {
    case hasChildren(item) && isNestedList(item.hasPart.parts):
      return (
        <NestedAccordionList
          title={item.headline}
          list={item}
          styles={styles}
        />
      );
    case hasChildren(item):
      return (
        <TitleWithAccordionList
          title={item.headline}
          list={item}
          styles={styles}
        />
      );
    default:
      return <HeaderLink link={item} styles={styles} />;
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
