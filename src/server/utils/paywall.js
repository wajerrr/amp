import querystring from 'querystring';
import {
  USER_GROUP_ANONYMOUS,
  USER_GROUP_REGISTERED,
  USER_GROUP_SUBSCRIBER,
} from './user';

const COOKIE_AMP_VISITS = 'ec_amp_visits';
const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;

const getUrlParams = (params) =>
  querystring.stringify(
    Object.assign(
      {
        rid: 'READER_ID',
        url: 'CANONICAL_URL',
        ref: 'DOCUMENT_REFERRER',
        _: 'RANDOM',
      },
      params
    )
  );
const getPaywallConfig = (articleId) => ({
  authorization: `/authorization?${getUrlParams({ articleId })}`,
  pingback: `/pingback?${getUrlParams({
    articleId,
    access: 'AUTHDATA(access)',
    userGroup: 'AUTHDATA(userGroup)',
  })}`,
  authorizationFallbackResponse: {
    error: true,
    access: 0,
  },
});

const getVisitsThisWeek = (visits = {}) => {
  const dateWeekAgo = new Date(Date.now() - WEEK_IN_MS).getTime();
  return Object.values(visits).filter((date) => date > dateWeekAgo).length;
};
const wasVisitedThisWeek = (articleId, visits) => {
  const dateWeekAgo = new Date(Date.now() - WEEK_IN_MS).getTime();
  const dateVisited = visits[articleId];
  return dateVisited && dateVisited > dateWeekAgo;
};
const ARTICLE_LIMIT_ANONYMOUS = 1;
const ARTICLE_LIMIT_REGISTERED = 3;
const ARTICLE_LIMIT_SUBSCRIBER = Infinity;
const getArticleLimit = (userGroup) =>
  ({
    [USER_GROUP_ANONYMOUS]: ARTICLE_LIMIT_ANONYMOUS,
    [USER_GROUP_REGISTERED]: ARTICLE_LIMIT_REGISTERED,
    [USER_GROUP_SUBSCRIBER]: ARTICLE_LIMIT_SUBSCRIBER,
  }[userGroup] || ARTICLE_LIMIT_ANONYMOUS);

const addVisit = (visits = {}, articleId) => {
  const dateWeekAgo = new Date(Date.now() - WEEK_IN_MS).getTime();
  const cleanedVisits = Object.entries(visits).reduce((res, [aid, date]) => {
    if (dateWeekAgo < date) {
      res[aid] = date;
    }
    return res;
  }, {});
  return Object.assign(cleanedVisits, { [articleId]: Date.now() });
};

export {
  COOKIE_AMP_VISITS,
  getPaywallConfig,
  getVisitsThisWeek,
  wasVisitedThisWeek,
  getArticleLimit,
  addVisit,
};
