import getGraphqlData from '../get-graphql-data';
import renderHtml from '../render-html';

// This to be refactored when more information is availiable.
const getDomain = (host) => {
  if (host.includes('amp.economist.com')) {
    return 'https://www.economist.com';
  }
  if (host.includes('amp.s.aws.economist.com/')) {
    return 'https://www.economist.com';
  }
  if (process.env.NODE_ENV === 'development') {
    return 'https://www.economist.com';
  }
  return 'https://www.economist.com';
};

export const generateRefUrl = (pathname, host) =>
  `${getDomain(host)}/${pathname}`;

export const handler = async (request, h) => {
  try {
    const ref = generateRefUrl(request.params.pathname, request.headers.host);
    const res = await getGraphqlData(ref);
    if (
      process.env.NODE_ENV === 'production' &&
      res.data.canonical.isAccessibleForFree === false
    ) {
      return h.redirect(res.data.canonical.url.canonical);
    }
    return h.response(renderHtml(res.data, request.path));
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.error('Error: ', e);
    return h.response(e.toString()).code(501);
  }
};
const route = {
  method: 'GET',
  path: '/{pathname*}',
  handler,
};

export default route;
