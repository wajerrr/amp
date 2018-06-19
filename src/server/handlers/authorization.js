import url from 'url';
import getCORSExtension from './cors-extension';
import { isAvailableForFree } from '../config/available-articles';
import { getUserGroup } from '../utils/user';
import {
  COOKIE_AMP_VISITS,
  wasVisitedThisWeek,
  getVisitsThisWeek,
  getArticleLimit,
} from '../utils/paywall';

const COOKIE_USER_TYPE = 'ec_user_type';

export const handler = (request) => {
  const { articleId } = request.query;
  const articlePath = url.parse(request.query.url).pathname;
  const visits = request.state[COOKIE_AMP_VISITS] || {};
  const userGroup = getUserGroup(request.state[COOKIE_USER_TYPE]);
  let access = 0;
  if (
    isAvailableForFree(articlePath) ||
    wasVisitedThisWeek(articleId, visits) ||
    getVisitsThisWeek(visits) < getArticleLimit(userGroup)
  ) {
    access = 1;
  }
  return {
    access,
    userGroup,
  };
};

const route = {
  method: 'GET',
  path: '/authorization',
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

export default route;
