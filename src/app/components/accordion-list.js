import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import SubscribeButton from './subscribe-button';
import color from '../styles/color';
import fontFamily from '../styles/font-family';
import typography from '../styles/typography';
import spacings from '../styles/spacings';

const chevronIconDown =
  'data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2048%2048%22%20style%3D%22fill%3A%233E51B5%3B%22%20xml%3Aspace%3D%22preserve%22%20height%3D%22%22%20width%3D%22%22%3E%0A%09%20%3Cpolygon%20points%3D%2233.2%2C18.6%2036%2C21.4%2024%2C33.4%2012%2C21.4%2014.8%2C18.6%2024%2C27.7%20%09%22%2F%3E%0A%3C%2Fsvg%3E';
const wrapperSectionClassName = css`
  font-family: ${fontFamily.sans};
  font-size: ${typography.sizeStep['-1']};
  z-index: 99999;
  border-bottom: 1px solid ${color.cardiff};
  &::after {
    content: '';
    background: url(${chevronIconDown});
    background-repeat: no-repeat;
    right: ${spacings.m};
    top: 7px;
    position: absolute;
    height: 30px;
    width: 30px;
    z-index: -1;
  }
  &[expanded] {
    border-bottom: none;
    &::after {
      transform: rotate(180deg);
    }
  }
`;
const headingClassName = css`
  border: none;
  background-color: transparent;
  font-size: ${typography.sizeStep['1']};
  font-weight: 500;
  padding: ${spacings.s} ${spacings.l};
  color: ${color.kiev};
`;
const listItemLinkClassName = css`
  display: block;
  text-decoration: none;
  color: ${color.kiev};
  padding: ${spacings.m} ${spacings.l};
  text-indent: ${spacings.l};
  &:active {
    background-color: ${color.cardiff};
  }
  &:last-of-type {
    border-bottom: 1px solid ${color.cardiff};
  }
`;

const getListItemComponent = (item) =>
  item.headline === 'Subscribe' ? (
    <SubscribeButton
      customStyles={{
        display: 'block',
        margin: spacings.l,
        fontSize: '18px',
        width: `calc(100% - ${spacings.xxxl})`,
        padding: spacings.s,
        height: 'fit-content',
        fontWeight: '300',
        lineHeight: '1.4',
      }}
      key={item.id}
    />
  ) : (
    <a href="/" className={listItemLinkClassName}>
      {item.headline}
    </a>
  );

const AccordionListItem = ({ item }) =>
  item.hasPart ? (
    <amp-accordion id="accordion">
      <section className={wrapperSectionClassName}>
        <h4 className={headingClassName}>{item.headline}</h4>
        <div>
          {item.hasPart.parts.map((itm) => (
            <AccordionListItem item={itm} key={itm.id} />
          ))}
        </div>
      </section>
    </amp-accordion>
  ) : (
    getListItemComponent(item)
  );

AccordionListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default AccordionListItem;
