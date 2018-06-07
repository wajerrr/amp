import Hapi from 'hapi';
import config from './config/base-config';
import healthcheck from './handlers/healthcheck';
import rootRedirect from './handlers/root-redirect';
import ampPageRenderer from './handlers/amp-page-render';

const serverConfig = {
  port: config.httpPort,
  host: config.host,
};

const server = Hapi.server(serverConfig);

server.route(rootRedirect);
server.route(ampPageRenderer);
server.route(healthcheck);

export default server;
