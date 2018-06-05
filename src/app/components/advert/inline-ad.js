import React from 'react';
import PropTypes from 'prop-types';
import { environment } from '../../../server/utils/environment-detection';

const InlineAd = ({ siteCode, zoneCode, className }) => (
  <div className={className}>
    <amp-ad
      type="doubleclick"
      width="300"
      height="250"
      data-slot={`/5605/${environment}.${siteCode}/${zoneCode}`}
      className={className}
    />
  </div>
);

export default InlineAd;

InlineAd.propTypes = {
  siteCode: PropTypes.string.isRequired,
  zoneCode: PropTypes.string.isRequired,
  className: PropTypes.string,
};

InlineAd.defaultProps = {
  className: '',
};
