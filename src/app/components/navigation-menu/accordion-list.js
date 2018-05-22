import React from 'react';
import PropTypes from 'prop-types';
import color from '../../styles/color';
import { LargeSubscribeButton } from '../styled-subscribe-button/styled-subscribe-button';
import StyledLink from '../styled-link/styled-link';
import StyledIconButton from '../styled-icon-button/styled-icon-button';

const getListItemComponent = (item, styles) => {
  let link = item.url && (
    <StyledLink
      href={item.url.canonical}
      className={styles.StyledLink}
      key={item.id}
    >
      {item.headline}
    </StyledLink>
  );
  if (item.headline === 'Subscribe') {
    link = <LargeSubscribeButton key={item.id} />;
  }
  return link || null;
};

const AccordionListItem = ({ item, styles }) =>
  item.hasPart ? (
    <amp-accordion id="accordion">
      <section className={styles.StyledSection}>
        <h4 className={styles.StyledHead}>
          <span>{item.headline}</span>
          <StyledIconButton
            className={styles.StyledIconButton}
            onProps=""
            icon="chevron"
            iconColor={color.chicago}
          />
        </h4>
        <div>
          {item.hasPart.parts.map((partItem) => (
            <AccordionListItem
              item={partItem}
              key={partItem.id}
              styles={styles}
            />
          ))}
        </div>
      </section>
    </amp-accordion>
  ) : (
    getListItemComponent(item, styles)
  );

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
