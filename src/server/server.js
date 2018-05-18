import Hapi from 'hapi';
import config from './config/base-config';
import healthcheck from './handlers/healthcheck';

const serverConfig = {
  port: config.httpPort,
  host: config.host,
};

const server = Hapi.server(serverConfig);

server.route(require('./handlers/amp-page-render').default);

server.route(healthcheck);
export default server;
