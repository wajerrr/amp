import url from 'url';
import getCORSExtension from './cors-extension';
import { isAvailableForFree } from '../config/available-articles';
import { addVisit, COOKIE_AMP_VISITS } from '../utils/paywall';
import { USER_GROUP_SUBSCRIBER } from '../utils/user';

export const handler = (request, h) => {
  const { articleId, userGroup } = request.query;
  const access = parseInt(request.query.access, 10);
  const articlePath = url.parse(request.query.url).pathname;
  if (
    access &&
    userGroup !== USER_GROUP_SUBSCRIBER &&
    !isAvailableForFree(articlePath)
  ) {
    h.state(
      COOKIE_AMP_VISITS,
      addVisit(request.state[COOKIE_AMP_VISITS], articleId)
    );
  }
  return { success: true };
};

const route = {
  method: 'POST',
  path: '/pingback',
  config: {
    cors: true,
    ext: getCORSExtension(),
    state: {
      parse: true,
      failAction: 'ignore',
    },
  },
  handler,
};

const getRoute = (server) => {
  server.state(COOKIE_AMP_VISITS, {
    ttl: null,
    isSecure: true,
    isHttpOnly: true,
    encoding: 'base64json',
    clearInvalid: false,
    strictHeader: true,
  });
  return route;
};

export default getRoute;
