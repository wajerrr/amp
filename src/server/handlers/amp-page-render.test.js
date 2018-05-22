/* eslint-disable no-console */
import getGraphqlData from '../get-graphql-data';
import renderHtml from '../render-html';
import server from '../server';
import * as envVars from '../utils/environment-detection';
import economistConfig from '../config/economist';

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

jest.mock('../get-graphql-data', () =>
  jest.fn().mockImplementation(() => Promise.resolve({ data: mockData }))
);

const mockHtml = '<h1>I am Little mock</h1>';
jest.mock('../render-html', () => jest.fn().mockImplementation(() => mockHtml));

console.error = jest.fn();

const url = '/test/article';
const error = new Error('ERROR');

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
    getGraphqlData.mockImplementation(() =>
      Promise.resolve({ data: mockData })
    );
    envVars.isProd = false;
    envVars.isStage = false;
    getGraphqlData.mockClear();
    renderHtml.mockClear();
    console.error.mockClear();
  });

  it('should call getGraphqlData method with correct path', async (done) => {
    await server.inject({ method: 'GET', url });
    expect(getGraphqlData).toHaveBeenCalledTimes(1);
    expect(getGraphqlData).toHaveBeenCalledWith(
      `${economistConfig.domain}${url}`
    );
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

  it('should return error and call console.error when getGraphqlData return error', async (done) => {
    getGraphqlData.mockImplementation(() => Promise.reject(error));
    const response = await server.inject({ method: 'GET', url });
    expect(response.result).toEqual(error.toString());
    expect(response.statusCode).toEqual(501);
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith('Error: ', error);
    getGraphqlData.mockImplementation(() => mockHtml);
    done();
  });

  it('should redirect to canonical article url when isProd is true and article is not free', async (done) => {
    getGraphqlData.mockImplementation(() =>
      Promise.resolve({ data: mockNotFreeData })
    );
    envVars.isProd = true;
    const response = await server.inject({ method: 'GET', url });
    expect(response.statusCode).toEqual(302);
    expect(response.headers.location).toEqual(mockLocation);
    done();
  });
  it('should redirect to canonical article url when  isStage is true and article is not free', async (done) => {
    getGraphqlData.mockImplementation(() =>
      Promise.resolve({ data: mockNotFreeData })
    );
    envVars.isStage = true;
    const response = await server.inject({ method: 'GET', url });
    expect(response.statusCode).toEqual(302);
    expect(response.headers.location).toEqual(mockLocation);
    done();
  });
});
