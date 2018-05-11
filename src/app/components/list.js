import React from 'react';
import { css } from 'emotion';
import ListItem from './list-item';
import SubscribeButton from './subscribe-button';
import color from '../styles/color';

const chevronIconDown =
  'data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2048%2048%22%20style%3D%22fill%3A%233E51B5%3B%22%20xml%3Aspace%3D%22preserve%22%20height%3D%22%22%20width%3D%22%22%3E%0A%09%20%3Cpolygon%20points%3D%2233.2%2C18.6%2036%2C21.4%2024%2C33.4%2012%2C21.4%2014.8%2C18.6%2024%2C27.7%20%09%22%2F%3E%0A%3C%2Fsvg%3E';

const hiddenHeadingClassName = css`
  display: none;
`;
const wrapperSectionClassName = css`
  z-index: 99999;
  &::after {
    content: '';
    background: url(${chevronIconDown});
    background-repeat: no-repeat;
    right: 0.5em;
    top: 0;
    position: absolute;
    height: 40px;
    width: 40px;
    z-index: -1;
  }
  &[expanded]::after {
    transform: rotate(180deg);
  }
`;
const innerSectionClassName = css`
  &:active {
    background-color: ${color.cardiff};
  }
`;
const listClassName = css`
  padding-left: 0;
`;

const getListItemComponent = (item) =>
  item.headline === 'Subscribe' ? (
    <SubscribeButton
      customStyles={{
        display: 'block',
        margin: '1em',
        'font-size': '18px',
        width: 'calc(100% - 2em)',
        padding: '0.5em',
        height: 'fit-content',
        'font-weight': '400',
      }}
    />
  ) : (
    <section className={innerSectionClassName}>
      <h4 className={hiddenHeadingClassName}>Subscribe</h4>
      <ListItem {...item} />
    </section>
  );

const List = ({ listItems }) =>
  listItems.map((item) => {
    const children = item.hasPart ? item.hasPart.parts : null;
    return children && children.length ? (
      <amp-accordion id="accordion">
        <section className={wrapperSectionClassName}>
          <h4>{item.headline}</h4>
          <ul className={listClassName}>
            <List listItems={children} />
          </ul>
        </section>
      </amp-accordion>
    ) : (
      getListItemComponent(item)
    );
  });

export default List;
