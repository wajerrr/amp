import Hapi from 'hapi';
import config from './config/base-config';
import healthcheck from './handlers/healthcheck';
import rootRedirect from './handlers/root-redirect';
import ampPageRenderer from './handlers/amp-page-render';
import analyticsConfig from './handlers/analytics-config';
import checkConsent from './handlers/check-consent';
import authorization from './handlers/authorization';
import getPingback from './handlers/pingback';

const serverConfig = {
  port: config.httpPort,
  host: config.host,
};

const server = Hapi.server(serverConfig);

server.route(rootRedirect);
server.route(ampPageRenderer);
server.route(healthcheck);
server.route(analyticsConfig);
server.route(checkConsent);
server.route(authorization);
server.route(getPingback(server));

export default server;
