import React from 'react';
import PropTypes from 'prop-types';
import IconDown from '@economist/component-icon/lib/inline-icons/down';
import color from '../../styles/color';
import { LargeSubscribeButton } from '../styled-subscribe-button/styled-subscribe-button';
import StyledLink from '../styled-link/styled-link';
import StyledIconButton from '../styled-icon-button/styled-icon-button';

function hasChildren(item) {
  return item.hasPart && item.hasPart.parts && item.hasPart.parts.length > 0;
}
function isNestedList(list) {
  let isNested = false;
  list.map((listItem) => {
    if (listItem.hasPart) {
      isNested = hasChildren(listItem);
    }
  });
  return isNested;
}

const HeaderSection = ({ title }, styles) => (
  <h4 className={styles.StyledHead}>
    <span>{title}</span>
    <IconDown className={styles.StyledIconButton} />
  </h4>
);

const TitleWithAccordionList = ({ title, list }, styles) => (
  <amp-accordion id="accordion">
    <section className={styles.StyledSection}>
      <HeaderSection title={title} styles={styles} />
      <div>
        {list.hasPart.parts.map((listItem) => (
          <StyledLink href={listItem.url.canonical}>
            {listItem.headline}
          </StyledLink>
        ))}
      </div>
    </section>
  </amp-accordion>
);

const HeaderLink = ({ link }, styles) =>
  link.url ? (
    <StyledLink href={link.url.canonical} className={styles.StyledHead}>
      {link.headline}
    </StyledLink>
  ) : (
    <TitleWithAccordionList title={link.headline} list={link} />
  );

const NestedAccordionList = ({ title, list }, styles) => (
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
              />
            ) : (
              <HeaderLink link={listItem} />
            )
        )}
      </div>
    </section>
  </amp-accordion>
);

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
      break;
    case hasChildren(item):
      return (
        <TitleWithAccordionList
          title={item.headline}
          list={item}
          styles={styles}
        />
      );
      break;
    default:
      return <HeaderLink link={item} styles={styles} />;
      break;
  }
};

AccordionListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({
    StyledSection: PropTypes.string,
    StyledIconButton: PropTypes.string,
    StyledLink: PropTypes.string,
  }),
};

AccordionListItem.defaultProps = {
  styles: {},
};

export default AccordionListItem;
