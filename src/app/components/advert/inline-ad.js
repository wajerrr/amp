import React from 'react';
import PropTypes from 'prop-types';

const InlineAd = ({ ad, className }) => {
  if (!ad) {
    return null;
  }
  const { siteCode, zoneCode, environment } = ad;
  return (
    <div className={className}>
      <amp-ad
        type="doubleclick"
        width="300"
        height="250"
        data-slot={`/5605/${environment}.${siteCode}/${zoneCode}`}
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
