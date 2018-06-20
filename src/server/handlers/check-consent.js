import querystring from 'querystring';

const EVIDON_COOKIE_NAME = '_evidon_consent_cookie';

/**
 * Returns list of un-parsed cookies from cookie header
 * @param cookieHeader
 * @returns {*}
 */
const nonStandardCookieParser = (cookieHeader) =>
  querystring.parse(cookieHeader, '; ', '=');

const handler = (request, h) => {
  // Evidon saves cookie in format which HAPI can't parse,
  // so we try to parse cookies ourselves
  const rawCookies = nonStandardCookieParser(request.headers.cookie);
  const hasCookie = !!(
    request.state[EVIDON_COOKIE_NAME] || rawCookies[EVIDON_COOKIE_NAME]
  );
  return h.response({ promptIfUnknown: !hasCookie }).code(200);
};

const route = {
  method: 'POST',
  path: '/check_consent.json',
  config: {
    state: {
      parse: true,
      failAction: 'ignore',
    },
  },
  handler,
};

export default route;
