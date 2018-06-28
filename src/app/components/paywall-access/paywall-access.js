import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PaywallComponent = () => (
  <Fragment>
    Please pay to read more
    <br />
    <button>Pay</button>
  </Fragment>
);
const RegwallComponent = () => (
  <Fragment>
    Please subscribe to read more
    <br />
    <button>Subscribe</button>
  </Fragment>
);

const PaywallAccess = ({ children }) => (
  <Fragment>
    <div amp-access="access">{children}</div>
    <div
      amp-access="NOT access AND userGroup = 'anonymous'"
      amp-access-hide="true"
    >
      <RegwallComponent />
    </div>
    <div
      amp-access="NOT access AND userGroup != 'anonymous'"
      amp-access-hide="true"
    >
      <PaywallComponent />
    </div>
  </Fragment>
);

PaywallAccess.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PaywallAccess;
