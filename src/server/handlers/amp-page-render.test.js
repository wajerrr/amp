/* eslint-disable no-console */
import getData, {
  GRAPH_QL_ARTICLE_404_MSG,
  GRAPH_QL_500_MSG,
} from '../graphql/get-data';
import renderHtml from '../render-html';
import server from '../server';
import * as envVars from '../utils/environment-detection';
import economistConfig from '../config/economist';
import HttpError from '../utils/http-error';

const mockData = 'testData';

const mockLocation = 'https://iam.conaninical/url';
const mockNotFreeData = {
  canonical: {
    isAccessibleForFree: false,
    url: {
      canonical: mockLocation,
    },
  },
};

jest.mock('../graphql/get-data', () =>
  jest.fn().mockImplementation(() => Promise.resolve({ data: mockData }))
);

const mockHtml = '<h1>I am Little mock</h1>';
jest.mock('../render-html', () => jest.fn().mockImplementation(() => mockHtml));

console.error = jest.fn();

const url = '/test/article';
const error = new HttpError(GRAPH_QL_500_MSG, 500);
const error404 = new HttpError(GRAPH_QL_ARTICLE_404_MSG, 404);

describe('ampPageRenderer handler', async () => {
  beforeAll(async (done) => {
    await server.start();
    done();
  });

  afterAll(async (done) => {
    await server.stop();
    done();
  });

  beforeEach(() => {
    getData.mockImplementation(() => Promise.resolve({ data: mockData }));
    envVars.isProd = false;
    envVars.isStage = false;
    getData.mockClear();
    renderHtml.mockClear();
    console.error.mockClear();
  });

  it('should call getData method with correct path', async (done) => {
    await server.inject({ method: 'GET', url });
    expect(getData).toHaveBeenCalledTimes(1);
    expect(getData).toHaveBeenCalledWith(`${economistConfig.domain}${url}`);
    done();
  });

  it('should call renderHtml method with correct path', async (done) => {
    await server.inject({ method: 'GET', url });
    expect(renderHtml).toHaveBeenCalledTimes(1);
    expect(renderHtml).toHaveBeenCalledWith('testData', url);
    done();
  });

  it('should return response with correct data', async (done) => {
    const response = await server.inject({ method: 'GET', url });
    expect(response.statusCode).toEqual(200);
    expect(response.result).toEqual(mockHtml);
    done();
  });

  it('should return error and call console.error when getData return 500 error', async (done) => {
    getData.mockImplementation(() => Promise.reject(error));
    const response = await server.inject({ method: 'GET', url });
    expect(response.result).toEqual(error.toString());
    expect(response.statusCode).toEqual(500);
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith('Error: ', error);
    done();
  });

  it('should return 404 page when getData returns 404', async (done) => {
    getData.mockImplementation(() => Promise.reject(error404));
    const response = await server.inject({ method: 'GET', url });
    expect(response.result).toEqual('<h1>404 ERROR  COMPONENT TO GO HERE</h1>');
    expect(response.statusCode).toEqual(404);
    done();
  });

  it('should redirect to canonical article url when isProd is true and article is not free', async (done) => {
    getData.mockImplementation(() =>
      Promise.resolve({ data: mockNotFreeData })
    );
    envVars.isProd = true;
    const response = await server.inject({ method: 'GET', url });
    expect(response.statusCode).toEqual(302);
    expect(response.headers.location).toEqual(mockLocation);
    done();
  });

  it('should redirect to canonical article url when  isStage is true and article is not free', async (done) => {
    getData.mockImplementation(() =>
      Promise.resolve({ data: mockNotFreeData })
    );
    envVars.isStage = true;
    const response = await server.inject({ method: 'GET', url });
    expect(response.statusCode).toEqual(302);
    expect(response.headers.location).toEqual(mockLocation);
    done();
  });
});
