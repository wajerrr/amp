import Hapi from 'hapi';
import config from './config';
import healthcheck from './handlers/healthcheck';

const serverConfig = {
  port: config.httpPort,
  host: config.host,
};

const server = Hapi.server(serverConfig);

server.route(require('./handlers/amp-page-render').default);

<<<<<<< HEAD
server.route({
  method: 'GET',
  path: '/{pathname*}',
  async handler(request, h) {
    try {
      const ref = generateRefUrl(request.params.pathname);

      const res = await getGraphqlData(ref);

      if (
        process.env.NODE_ENV === 'production' &&
        res.data.canonical.isAccessibleForFree === false
      ) {
        return h.redirect(res.data.canonical.url.canonical);
      }

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
=======
server.route(healthcheck);
>>>>>>> added healthcheck handler

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
