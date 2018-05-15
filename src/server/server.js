import Hapi from 'hapi';
import getGraphqlData from './get-graphql-data';

const config = {
  host: process.env.NODE_ENV === 'development' ? 'localhost' : '0.0.0.0',
  port: 8000,
};

const server = Hapi.server(config);

const generateRefUrl = (pathname) =>
  `https://www.economist.com/${pathname ||
    'news/world-week/21741222-politics-week'}`;

server.route({
  method: 'GET',
  path: '/{pathname*}',
  async handler(request) {
    try {
      const ref = generateRefUrl(request.params.pathname);

      const res = await getGraphqlData(ref);

      /* eslint-disable global-require */
      const renderHtml = require('./render-html').default;
      return renderHtml(res.data, request.path);
    } catch (e) {
      /* eslint-disable-next-line no-console */
      console.error('Error: ', e);
      return e.toString();
    }
  },
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.error('error', err);
    process.exit(1);
  }
  console.info(
    `Server running at: ${
      server.info.uri
    } in ${process.env.NODE_ENV.toUpperCase()} mode`
  );
  return server;
}

export default start();
