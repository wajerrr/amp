import React from 'react';
import PropTypes from 'prop-types';

const PaywallList = ({ list, styles }) => (
  <section className={styles.StyledListWrapper}>
    <ul className={styles.StyledList}>
      {list.map((listItem) => (
        <li className={styles.StyledListItem} key={listItem.title}>
          <b>{listItem.title}</b> - {listItem.text}
        </li>
      ))}
    </ul>
  </section>
);
export default PaywallList;

PaywallList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  styles: PropTypes.shape({}),
};

PaywallList.defaultProps = {
  styles: {},
};
