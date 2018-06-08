import { isStage } from '../utils/environment-detection';
import { hourOfTheDay, getCurrentDay, fullDate } from '../utils/analytics-date';
import {
  getUserId,
  getSubscription,
  isUserLoggedIn,
  trimAdobeId,
  isMultiUserLicense,
} from '../utils/user';

const handler = (request, h) => {
  // extends https://github.com/ampproject/amphtml/blob/ca6bf4aa6b3ae15022e8b016aa3840b938a0e6c0/extensions/amp-analytics/0.1/vendors.js#L1526

  const { state } = request;
  const userLoggedInStatus = isUserLoggedIn(state)
    ? 'logged_in'
    : 'not_logged_in';

  const config = {
    vars: {
      host: 'sstats.economist.com',
      reportSuites: isStage ? 'economistcomprod' : 'economistcomdev',
    },
    triggers: {
      trackPageview: {
        on: 'visible',
        request: 'pageview',
        vars: {
          adobe_id: trimAdobeId(state.s_vi),
          eventId: 'pageview',
        },
        extraUrlParams: {
          vid: trimAdobeId(state.s_vi),
          fid: state.s_fid,

          prop11: userLoggedInStatus,
          eVar11: userLoggedInStatus,

          prop13: getSubscription(state),
          eVar13: getSubscription(state),

          prop40: getUserId(state),
          eVar40: getUserId(state),

          prop46: isMultiUserLicense(state) ? 'MUL-IP' : '',
          eVar46: isMultiUserLicense(state) ? 'MUL-IP' : '',

          prop8: hourOfTheDay(),
          eVar8: hourOfTheDay(),

          prop9: getCurrentDay(),
          eVar9: getCurrentDay(),

          prop10: fullDate(),
          eVar10: fullDate(),
        },
      },
    },
  };
  return h.response(JSON.stringify(config));
};

const route = {
  method: 'GET',
  path: '/analytics.config.json',
  config: {
    state: {
      parse: true,
      failAction: 'log',
    },
  },
  handler,
};

export default route;
