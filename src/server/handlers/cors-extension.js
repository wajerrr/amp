import config from '../config/economist';

const { ampDomain } = config;

const setHeader = (request, name, value) => {
  if (request.response && request.response.header)
    request.response.header(name, value);
  else if (
    request.response &&
    request.response.output &&
    request.response.output.headers
  )
    request.response.output.headers[name] = value;
};

const getGoogleSubdomain = (domain) =>
  domain.replace(/-/g, '--').replace(/\./g, '-');

// implements https://www.ampproject.org/docs/fundamentals/amp-cors-requests
const getCORSExtension = () => ({
  onPreHandler: {
    method: (request, h) => {
      const allowedOrigins = [
        `https://${ampDomain}`,
        `https://${getGoogleSubdomain(ampDomain)}.cdn.ampproject.org`,
        `https://${ampDomain}.amp.cloudflare.com`,
        `https://cdn.ampproject.org`,
      ];
      const { origin } = request.headers;
      /* eslint-disable-next-line no-underscore-dangle */
      const ampSourceOrigin = request.query.__amp_source_origin;
      const allowedSourceOrigin = `https://${ampDomain}`;

      if (!request.headers['amp-same-origin']) {
        if (
          !allowedOrigins.includes(origin) ||
          ampSourceOrigin !== allowedSourceOrigin
        ) {
          return h
            .response({ error: 'Unauthorized Request' })
            .code(401)
            .takeover();
        }
      }

      return h.continue;
    },
  },
  onPreResponse: {
    method: (request, h) => {
      if (request.response.statusCode === 200) {
        setHeader(request, 'Access-Control-Allow-Credentials', 'true');
      }
      setHeader(
        request,
        'AMP-Access-Control-Allow-Source-Origin',
        /* eslint-disable-next-line no-underscore-dangle */
        request.query.__amp_source_origin
      );

      return h.continue;
    },
  },
});

export default getCORSExtension;
