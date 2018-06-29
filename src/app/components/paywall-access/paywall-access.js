import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyledPaywall, StyledRegwall } from '../styled-paywall/styled-paywall';

const PaywallAccess = ({ children }) => (
  <Fragment>
    <div amp-access="access">{children}</div>
    <div
      amp-access="NOT access AND userGroup = 'anonymous'"
      amp-access-hide="true"
    >
      <StyledRegwall />
    </div>
    <div
      amp-access="NOT access AND userGroup != 'anonymous'"
      amp-access-hide="true"
    >
      <StyledPaywall />
    </div>
  </Fragment>
);

PaywallAccess.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PaywallAccess;
