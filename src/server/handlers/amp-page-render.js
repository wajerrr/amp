import getGraphqlData from '../get-graphql-data';
import renderHtml from '../render-html';

const generateRefUrl = (pathname) =>
  `https://www.economist.com/${pathname ||
    'news/world-week/21741222-politics-week'}`;

const handler = async (request, h) => {
  try {
    const ref = generateRefUrl(request.params.pathname);
    const res = await getGraphqlData(ref);
    return h.response(renderHtml(res.data, request.path));
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.error('Error: ', e);
    return h.response(e.toString());
  }
};
const route = {
  method: 'GET',
  path: '/{pathname*}',
  handler,
};

export default route;
