import client from './graphql-client';

import {
  getErrorCode,
  getContent,
  processDataFromQueries,
  throwIfDataErrors,
  GRAPH_QL_500_MSG,
  GRAPH_QL_ARTICLE_404_MSG,
} from './get-data';
import HttpError from '../utils/http-error';

const mockData = { data: 'mockdata ' };
jest.mock('./graphql-client', () => ({
  query: jest.fn(() => Promise.resolve(mockData)),
}));

describe('get-data', () => {
  describe('checkDataForErrors', () => {
    it('should return true if there is no errors in the data', () => {
      const data = { navigation: {}, editorsPick: {}, article: {} };
      const actual = throwIfDataErrors(data);
      expect(actual).toEqual(true);
    });

    it('should throw correct error when editorsPick is error', () => {
      const data = {
        navigation: {},
        editorsPick: new HttpError('error'),
        article: {},
      };
      try {
        throwIfDataErrors(data);
        throw new Error('checkDataForErrors should throw exception');
      } catch (e) {
        expect(e.message).toEqual(GRAPH_QL_500_MSG);
        expect(e.status).toEqual(500);
      }
    });

    it('should throw correct error when navigation is error', () => {
      const data = {
        navigation: new HttpError('error'),
        editorsPick: {},
        article: {},
      };
      try {
        throwIfDataErrors(data);
        throw new Error('checkDataForErrors should throw exception');
      } catch (e) {
        expect(e.message).toEqual(GRAPH_QL_500_MSG);
        expect(e.status).toEqual(500);
      }
    });

    it('should throw correct error when article is error with status 404', () => {
      const data = {
        navigation: {},
        editorsPick: {},
        article: new HttpError('error', 404),
      };
      try {
        throwIfDataErrors(data);
        throw new Error('checkDataForErrors should throw exception');
      } catch (e) {
        expect(e.message).toEqual(GRAPH_QL_ARTICLE_404_MSG);
        expect(e.status).toEqual(404);
      }
    });

    it('should throw correct error when article is error with status different than 404', () => {
      const data = {
        navigation: {},
        editorsPick: {},
        article: new HttpError('error'),
      };
      try {
        throwIfDataErrors(data);
        throw new Error('checkDataForErrors should throw exception');
      } catch (e) {
        expect(e.message).toEqual(GRAPH_QL_500_MSG);
        expect(e.status).toEqual(500);
      }
    });
  });

  describe('getContent', () => {
    beforeEach(() => {
      client.query.mockClear();
      client.query.mockImplementation(() => Promise.resolve(mockData));
    });
    it('should call client query with provided query', async (done) => {
      await getContent('abc');
      expect(client.query).toHaveBeenCalledTimes(1);
      expect(client.query).toHaveBeenCalledWith({ query: 'abc' });
      done();
    });

    it('should resolve with query data', async (done) => {
      const actual = await getContent('abc');
      expect(actual).toEqual(mockData.data);
      done();
    });
    it('should resolve with error if client.query returns error', async (done) => {
      client.query.mockImplementation(() => Promise.reject(mockData));
      const actual = await getContent('abc');
      expect(actual).toEqual(new HttpError(GRAPH_QL_500_MSG, 500));
      done();
    });
  });

  describe('getErrorCode', () => {
    it('should return error code if can parse provided string', () => {
      expect(getErrorCode('Error: 490: Error')).toEqual(490);
    });

    it('should return 500 can not parse provided string', () => {
      expect(getErrorCode('490 Error')).toEqual(500);
    });
  });

  describe('processDataFromQueries', () => {
    it('should return correct data object if all queries resolve', async (done) => {
      const promises = {
        a: Promise.resolve('a'),
        b: Promise.resolve('b'),
      };
      const actual = await processDataFromQueries(promises);
      const expected = { a: 'a', b: 'b' };
      expect(actual).toEqual(expected);
      done();
    });
  });
});
