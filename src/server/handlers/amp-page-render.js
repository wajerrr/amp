import getGraphqlData from '../get-graphql-data';
import renderHtml from '../render-html';

export const generateRefUrl = (pathname) =>
  `https://www.economist.com/${pathname ||
    'news/world-week/21741222-politics-week'}`;

export const handler = async (request, h) => {
  try {
    const ref = generateRefUrl(request.params.pathname);
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
