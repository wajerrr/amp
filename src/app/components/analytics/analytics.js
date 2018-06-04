import React from 'react';
import { PropTypes } from 'prop-types';

const slug = (string, { replacement = '_' } = {}) => {
  const lowerCaseString = String(string || '').toLowerCase();

  // Replace :
  // - '...'
  // - space or multiple spaces
  // - every character that isn't a letter or a number
  return lowerCaseString.replace(
    /\.{3}|\s+|[^a-z0-9\u00C0-\u017F]/g,
    replacement
  );
};

/* eslint-disable no-template-curly-in-string */
const getAnalyticsData = ({ headline }) => ({
  __html: JSON.stringify({
    requests: {
      base: 'https://${trackingServer}/b/ss/${accounts}/1/AMP-0.1/s${random}',
      pageView:
        '${base}?AQB=1&vid=CLIENT_ID(adobe_amp_id)&pageName=${pageName}&j=amp&AQE=1',
    },
    vars: {
      trackingServer: 'sstats.economist.com',
      accounts: 'economistcomamp',
      pageName: slug(headline),
    },
    triggers: {
      trackPageview: {
        on: 'visible',
        request: 'pageView',
        vars: {
          eventId: 'pageview',
        },
      },
    },
  }),
});

const Analytics = ({ data: { article: { headline } = {} } }) => (
  <amp-analytics type="adobeanalytics">
    <script
      type="application/json"
      dangerouslySetInnerHTML={getAnalyticsData({ headline })}
    />
  </amp-analytics>
);

Analytics.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Analytics;
