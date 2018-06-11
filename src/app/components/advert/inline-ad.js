import React from 'react';
import PropTypes from 'prop-types';
import { isProd, isStage } from '../../../server/utils/environment-detection';

const InlineAd = ({ ad, className }) => {
  if (!ad) {
    return null;
  }
  const { siteCode, zoneCode } = ad;
  const environment =
    ad.environment || (isProd || isStage ? process.env.ENV : 'dev');
  return (
    <div className={className}>
      <amp-ad
        type="doubleclick"
        width="300"
        height="250"
        data-slot={`/5605/${environment}.${siteCode}/${zoneCode}`}
        json="{'targeting': { 'amp': ['y']}}"
      />
    </div>
  );
};

export default InlineAd;

InlineAd.propTypes = {
  ad: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
};

InlineAd.defaultProps = {
  className: '',
};
