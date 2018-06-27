import React from 'react';
import PropTypes from 'prop-types';

const benefitsList = [
  {
    title: 'Print or digital edition',
    text: 'delivered to you each week',
  },
  {
    title: 'Economist.com',
    text:
      'including blog content updated throughout the week and our online archive',
  },
  {
    title: 'Audio edition',
    text: 'each week’s issue read by professional broadcasters',
  },
  {
    title: 'The Economist Espresso',
    text: 'your morning briefing direct to your smartphone or inbox',
  },
];

const PaywallList = ({ styles }) => (
  <section className={styles.listWrapper}>
    <ul className={styles.list}>
      {benefitsList.map((listItem) => (
        <li className={styles.listItem} key={listItem.title}>
          <b>{listItem.title}</b> - {listItem.text}
        </li>
      ))}
    </ul>
  </section>
);
export default PaywallList;

PaywallList.propTypes = {
  styles: PropTypes.shape({
    listWrapper: PropTypes.string,
    list: PropTypes.string,
    listItem: PropTypes.string,
  }),
};
PaywallList.defaultProps = {
  styles: {},
};
