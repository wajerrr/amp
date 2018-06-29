import Hapi from 'hapi';
import config from './config/base-config';
import auth0Config from './auth0/config';
import healthcheck from './handlers/healthcheck';
import rootRedirect from './handlers/root-redirect';
import ampPageRenderer from './handlers/amp-page-render';
import analyticsConfig from './handlers/analytics-config';
import checkConsent from './handlers/check-consent';
import authorization from './handlers/authorization';
import getPingback from './handlers/pingback';
import loginCallback from './handlers/login-callback';
import { isDev } from './utils/environment-detection';

const serverConfig = {
  port: config.httpPort,
  host: config.host,
};

const server = Hapi.server(serverConfig);

server.state(auth0Config.ACCESS_TOKEN_COOKIE_NAME, {
  ttl: null,
  isSecure: !isDev,
  isHttpOnly: true,
  clearInvalid: false,
  strictHeader: true,
});

server.route(rootRedirect);
server.route(ampPageRenderer);
server.route(healthcheck);
server.route(analyticsConfig);
server.route(checkConsent);
server.route(authorization);
server.route(getPingback(server));
server.route(loginCallback);

export default server;
