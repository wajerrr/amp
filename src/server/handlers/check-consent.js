import querystring from 'querystring';
import getCORSExtension from './cors-extension';

const EVIDON_COOKIE_NAME = '_evidon_consent_cookie';

/**
 * Returns list of un-parsed cookies from cookie header
 * @param cookieHeader
 * @returns {*}
 */
const nonStandardCookieParser = (cookieHeader) =>
  querystring.parse(cookieHeader, '; ', '=');

const handler = (request) => {
  // Evidon saves cookie in format which HAPI can't parse,
  // so we try to parse cookies ourselves
  const rawCookies = nonStandardCookieParser(request.headers.cookie);
  const hasCookie = !!(
    request.state[EVIDON_COOKIE_NAME] || rawCookies[EVIDON_COOKIE_NAME]
  );
  return {
    promptIfUnknown: !hasCookie,
    _debug: { state: request.state, rawCookies },
  };
};

const route = {
  method: 'POST',
  path: '/check_consent.json',
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
