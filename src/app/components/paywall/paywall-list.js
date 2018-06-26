import React from 'react';
import PropTypes from 'prop-types';

const PaywallList = ({ data, styles }) => (
  <section className={styles.StyledListWrapper}>
    <ul className={styles.StyledList}>
      {data.content.list.map((listItem) => (
        <li className={styles.StyledListItem} key={listItem.title}>
          <b>{listItem.title}</b> - {listItem.text}
        </li>
      ))}
    </ul>
  </section>
);
export default PaywallList;

PaywallList.propTypes = {
  data: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

PaywallList.defaultProps = {
  styles: {},
};
