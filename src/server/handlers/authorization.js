import url from 'url';
import getCORSExtension from './cors-extension';
import { isAvailableForFree } from '../config/available-articles';
import { getUserGroup, getUserType } from '../utils/user';
import {
  COOKIE_AMP_VISITS,
  wasVisitedThisWeek,
  getUserVisitsThisWeek,
  getArticleLimit,
} from '../utils/paywall';
import config from '../auth0/config';
import getUserData from '../auth0/get-userdata';

export const handler = async (request, h) => {
  const { articleId } = request.query;
  const articlePath = url.parse(request.query.url).pathname;
  const visits = request.state[COOKIE_AMP_VISITS] || {};
  const accessToken = request.state[config.ACCESS_TOKEN_COOKIE_NAME];
  let userData = { 'http://economist.com/accessLevelCode': -1 };

  if (accessToken) {
    try {
      userData = await getUserData(accessToken);
    } catch (error) {
      if (error.status === 401 || error.status === 403) {
        h.unstate(config.ACCESS_TOKEN_COOKIE_NAME);
      }
    }
  }

  const userType = getUserType(
    userData['http://economist.com/accessLevelCode']
  );

  const userGroup = getUserGroup(userType);

  let access = 0;
  if (
    isAvailableForFree(articlePath) ||
    wasVisitedThisWeek(articleId, visits) ||
    getUserVisitsThisWeek(visits) < getArticleLimit(userGroup)
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
