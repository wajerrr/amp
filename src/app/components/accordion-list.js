import React from 'react';
import PropTypes from 'prop-types';
import SubscribeButton from './subscribe-button';
import StyledLink from './styled-link';
import IconButton from './icon-button';
import spacings from '../styles/spacings';

const getListItemComponent = (item) => {
  let link = item.url && (
    <StyledLink href={item.url.canonical} styleType="accordion" key={item.id}>
      {item.headline}
    </StyledLink>
  );
  if (item.headline === 'Subscribe') {
    link = <SubscribeButton largeSize key={item.id} />;
  }
  return link || null;
};

const AccordionListItem = ({ item, wrapperSectionClassName }) =>
  item.hasPart ? (
    <amp-accordion id="accordion">
      <section className={wrapperSectionClassName}>
        <h4>
          <span>{item.headline}</span>
          <IconButton
            onProps=""
            icon="chevronIcon"
            iconColor="chicago"
            customStyles={{
              bottom: '0',
              right: spacings.l,
              position: 'absolute',
            }}
          />
        </h4>
        <div>
          {item.hasPart.parts.map((itm) => (
            <AccordionListItem
              item={itm}
              key={itm.id}
              wrapperSectionClassName={wrapperSectionClassName}
            />
          ))}
        </div>
      </section>
    </amp-accordion>
  ) : (
    getListItemComponent(item)
  );

AccordionListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
  wrapperSectionClassName: PropTypes.string,
};

AccordionListItem.defaultProps = {
  wrapperSectionClassName: '',
};

export default AccordionListItem;
