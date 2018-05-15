import React from 'react';
import PropTypes from 'prop-types';
import SubscribeButton from './subscribe-button';
import StyledLink from './styled-link';

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
        <h4>{item.headline}</h4>
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
