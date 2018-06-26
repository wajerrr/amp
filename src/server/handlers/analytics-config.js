import { isDev } from '../utils/environment-detection';
import {
  hourOfTheDay,
  getCurrentDay,
  fullDate,
} from '../utils/analytics-dates';
import {
  getUserId,
  getSubscription,
  isUserLoggedIn,
  trimAdobeId,
  isMultiUserLicense,
} from '../utils/user';
import getCORSExtension from './cors-extension';

const handler = (request, h) => {
  const { state } = request;
  const propUserLoggedInStatus = isUserLoggedIn(state)
    ? 'logged_in'
    : 'not_logged_in';
  const propSubscription = getSubscription(state);
  const propUserId = getUserId(state);
  const propMultiLicense = isMultiUserLicense(state) ? 'MUL-IP' : '';
  const propHourOfTheDay = hourOfTheDay();
  const propGetCurrentDay = getCurrentDay();
  const propFullDate = fullDate();

  /* eslint-disable no-template-curly-in-string */
  // extends https://github.com/ampproject/amphtml/blob/ca6bf4aa6b3ae15022e8b016aa3840b938a0e6c0/extensions/amp-analytics/0.1/vendors.js#L1526
  const config = {
    requests: {
      requestPath: '/b/ss/${reportSuites}/1/H.25.4/s${random}',
      basePrefix:
        'vid=${adobe_id}' +
        '&ndh=0' +
        '&ce=${documentCharset}' +
        '&pageName=${pageName}' +
        '&g=${ampdocUrl}' +
        '&r=${documentReferrer}' +
        '&bh=${availableScreenHeight}' +
        '&bw=${availableScreenWidth}' +
        '&c=${screenColorDepth}' +
        '&j=amp' +
        '&s=${screenWidth}x${screenHeight}',
      pageview: 'https://${host}${requestPath}?${basePrefix}',
    },
    vars: {
      host: 'sstats.economist.com',
      reportSuites: isDev ? 'economistcomdev' : 'economistcomprod',
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
          fid: state.s_fid,

          prop8: propHourOfTheDay,
          eVar8: propHourOfTheDay,

          prop9: propGetCurrentDay,
          eVar9: propGetCurrentDay,

          prop10: propFullDate,
          eVar10: propFullDate,

          prop11: propUserLoggedInStatus,
          eVar11: propUserLoggedInStatus,

          prop13: propSubscription,
          eVar13: propSubscription,

          prop40: propUserId,
          eVar40: propUserId,

          prop46: propMultiLicense,
          eVar46: propMultiLicense,
        },
      },
    },
  };
  return h.response(config);
};

const route = {
  method: 'GET',
  path: '/analytics.config.json',
  config: {
    cors: true,
    ext: getCORSExtension(),
    state: {
      parse: true,
      failAction: 'ignore',
    },
  },
  handler,
};

export default route;
