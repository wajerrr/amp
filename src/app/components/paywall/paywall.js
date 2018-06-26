import React from 'react';
import PropTypes from 'prop-types';
import PaywallFooter from './paywall-footer';
import PaywallHeader from './paywall-header';
import PaywallText from './paywall-text';
import PaywallImage from './paywall-image';
import PaywallList from './paywall-list';
import PaywallSection from './paywall-section';
import PaywallSubscribeButton from './paywall-subscribe-button';

const nodePicker = (item, styles) => {
  switch (item.type) {
    case 'section':
      return <PaywallSection key={item.id} styles={styles} data={item} />;
    case 'header':
      return <PaywallHeader key={item.id} styles={styles} data={item} />;
    case 'text':
      return <PaywallText key={item.id} styles={styles} data={item} />;
    case 'subscribeButton':
      return (
        <PaywallSubscribeButton key={item.id} styles={styles} data={item} />
      );
    case 'image':
      return <PaywallImage key={item.id} styles={styles} data={item} />;
    case 'list':
      return <PaywallList key={item.id} styles={styles} data={item} />;
    case 'footer':
      return <PaywallFooter key={item.id} styles={styles} data={item} />;
    default:
      return '';
  }
};

const Paywall = ({ data, styles }) => (
  <section className={styles.StyledWrapper}>
    {data.map((dataItem) => nodePicker(dataItem, styles))}
  </section>
);

export default Paywall;

Paywall.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  styles: PropTypes.shape({}),
};

Paywall.defaultProps = {
  styles: {},
};
