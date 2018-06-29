import {
  getPaywallConfig,
  getUserVisitsThisWeek,
  wasVisitedThisWeek,
  getArticleLimit,
  addVisit,
} from './paywall';
import * as envVars from './environment-detection';

const origDate = global.Date;
global.Date = () => ({
  getTime: jest.genMockFunction().mockReturnValue(50),
});
Date.now = jest.genMockFunction().mockReturnValue(100);

describe('paywall utils', () => {
  afterAll(() => {
    global.Date = origDate;
  });

  describe('getPaywallConfig', () => {
    it('should return paywall config', () => {
      envVars.isDev = true;
      const result = getPaywallConfig('article1');
      expect(result).toEqual({
        authorization:
          '/authorization?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM&articleId=article1',
        pingback:
          '/pingback?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM&articleId=article1&access=AUTHDATA(access)&userGroup=AUTHDATA(userGroup)',
        login:
          'https://authenticate-dev.stage.economist.com/login?client=MtTdj0V9fbWAu46V8e0BTSaId1ZWxAE8&protocol=oauth2&response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A8001%2Fcallback%3Freturn%3DRETURN_URL',
        authorizationFallbackResponse: { error: true, access: 0 },
      });
    });
  });
  describe('getUserVisitsThisWeek', () => {
    it('should return this week visits', () => {
      const result = getUserVisitsThisWeek({ article1: 95 });
      expect(result).toEqual(1);
    });
    it('should not return older than week visits', () => {
      const result = getUserVisitsThisWeek({ article1: 40 });
      expect(result).toEqual(0);
    });
  });
  describe('wasVisitedThisWeek', () => {
    it('should return true if article was visited this week', () => {
      const result = wasVisitedThisWeek('article1', { article1: 90 });
      expect(result).toBeTruthy();
    });
    it('should return false if article was not visited this week', () => {
      const result = wasVisitedThisWeek('article1', { article1: 40 });
      expect(result).toBeFalsy();
    });
    it('should return false if article was not visited this week', () => {
      const result = wasVisitedThisWeek('article2', { article1: 90 });
      expect(result).toBeFalsy();
    });
  });
  describe('getArticleLimit', () => {
    it('should return default limit for unknown user group', () => {
      const result = getArticleLimit('');
      expect(result).toEqual(1);
    });
    it('should return limit for anonymous', () => {
      const result = getArticleLimit('anonymous');
      expect(result).toEqual(1);
    });
    it('should return limit for registered', () => {
      const result = getArticleLimit('registered');
      expect(result).toEqual(3);
    });
    it('should return limit for subscriber', () => {
      const result = getArticleLimit('subscriber');
      expect(result).toEqual(Infinity);
    });
  });
  describe('addVisit', () => {
    it('should add visit', () => {
      const result = addVisit({}, 'article1');
      expect(result).toEqual({ article1: 100 });
    });
    it('should remove older than week visits', () => {
      const result = addVisit({ article1: 40 }, 'article2');
      expect(result).toEqual({ article2: 100 });
    });
  });
});
