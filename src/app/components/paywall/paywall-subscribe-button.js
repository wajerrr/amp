import React from 'react';
import PropTypes from 'prop-types';
import {
  LargeSubscribeButton,
  LargeSubscribeButtonInvertedStyles,
} from '../styled-subscribe-button/styled-subscribe-button';

const PaywallSubscribeButton = ({ data, styles }) => {
  const SubscribeButton =
    data.props && data.props.invertedStyles
      ? LargeSubscribeButtonInvertedStyles
      : LargeSubscribeButton;
  return (
    <div className={styles.StyledSubscribeButtonWrapper}>
      <SubscribeButton href={data.content.href} key={data.content.text}>
        {data.content.text}
      </SubscribeButton>
    </div>
  );
};
export default PaywallSubscribeButton;

PaywallSubscribeButton.propTypes = {
  data: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

PaywallSubscribeButton.defaultProps = {
  styles: {},
};
