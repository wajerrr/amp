import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Paywall, Regwall } from '../paywall/paywall';

const PaywallAccess = ({ children }) => (
  <Fragment>
    <div amp-access="access">{children}</div>
    <div
      amp-access="NOT access AND userGroup = 'anonymous'"
      amp-access-hide="true"
    >
      <Regwall />
    </div>
    <div
      amp-access="NOT access AND userGroup != 'anonymous'"
      amp-access-hide="true"
    >
      <Paywall />
    </div>
  </Fragment>
);

PaywallAccess.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PaywallAccess;
