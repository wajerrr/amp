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
  let Component = PaywallSection;
  switch (item.type) {
    case 'header':
      Component = PaywallHeader;
      break;
    case 'text':
      Component = PaywallText;
      break;
    case 'subscribeButton':
      Component = PaywallSubscribeButton;
      break;
    case 'image':
      Component = PaywallImage;
      break;
    case 'list':
      Component = PaywallList;
      break;
    case 'footer':
      Component = PaywallFooter;
      break;
    default:
      break;
  }
  return <Component key={item.id} styles={styles} data={item} />;
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
