/* eslint-disable no-console */
import getData, {
  GRAPH_QL_ARTICLE_404_MSG,
  GRAPH_QL_500_MSG,
} from '../graphql/get-data';
import renderHtml from '../render-html';
import renderHtmlError from '../render-html-error';
import * as envVars from '../utils/environment-detection';
import economistConfig from '../config/economist';
import baseConfig from '../config/base-config';
import HttpError from '../utils/http-error';
import { handler } from './amp-page-render';

const mockData = 'testData';

jest.mock('../graphql/get-data', () =>
  jest.fn().mockImplementation(() => Promise.resolve({ data: mockData }))
);

const mockHtml = '<h1>I am Little mock</h1>';
jest.mock('../render-html', () => jest.fn().mockImplementation(() => mockHtml));

const mockErrorResponse = '<h1>Error</h1>';
jest.mock('../render-html-error', () =>
  jest.fn().mockImplementation(() => mockErrorResponse)
);

console.error = jest.fn();

const url = 'test/article';
const error = new HttpError(GRAPH_QL_500_MSG, 500);
const error404 = new HttpError(GRAPH_QL_ARTICLE_404_MSG, 404);

const h = {
  redirect: jest.fn().mockImplementation(() => h),
  response: jest.fn().mockImplementation(() => h),
  code: jest.fn().mockImplementation(() => h),
};
const request = {
  path: `/${url}`,
  headers: { host: `${baseConfig.host}` },
  params: { pathname: url },
};

describe('ampPageRenderer handler', () => {
  beforeEach(() => {
    getData.mockImplementation(() => Promise.resolve({ data: mockData }));
    envVars.isProd = false;
    envVars.isStage = false;
    getData.mockClear();
    renderHtml.mockClear();
    renderHtmlError.mockClear();
    console.error.mockClear();
    h.redirect.mockClear();
    h.code.mockClear();
    h.response.mockClear();
  });

  it('should call getData method with correct path', async (done) => {
    await handler(request, h);
    expect(getData).toHaveBeenCalledTimes(1);
    expect(getData).toHaveBeenCalledWith(`${economistConfig.domain}/${url}`);
    done();
  });

  it('should call renderHtml method with correct data', async (done) => {
    await handler(request, h);
    expect(renderHtml).toHaveBeenCalledTimes(1);
    expect(renderHtml).toHaveBeenCalledWith('testData');
    done();
  });

  it('should return response with correct data', async (done) => {
    await handler(request, h);

    expect(h.response).toHaveBeenCalledTimes(1);
    expect(h.response).toHaveBeenCalledWith(mockHtml);

    done();
  });

  it('should call renderHtmlErrors method getData returns error', async (done) => {
    getData.mockImplementation(() => Promise.reject(error));
    await handler(request, h);
    expect(renderHtmlError).toHaveBeenCalledTimes(1);
    expect(renderHtmlError).toHaveBeenCalledWith(
      error,
      `https://${baseConfig.host}/${url}`
    );
    done();
  });

  it('should call console.error with error when getData returns error', async (done) => {
    getData.mockImplementation(() => Promise.reject(error));
    await handler(request, h);
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(`Error: ${error.toString()}`);
    done();
  });

  it('should return response with correct error code from provided error', async (done) => {
    getData.mockImplementation(() => Promise.reject(error404));
    await handler(request, h);

    expect(h.code).toHaveBeenCalledTimes(1);
    expect(h.code).toHaveBeenCalledWith(404);
    done();
  });

  it('should return response with error code 500 when error status is not provided', async (done) => {
    getData.mockImplementation(() => Promise.reject(new Error('Error')));
    await handler(request, h);
    expect(h.code).toHaveBeenCalledTimes(1);
    expect(h.code).toHaveBeenCalledWith(500);
    done();
  });

  it('should redirect to staging server when isProd is true and article is not in the list', async (done) => {
    envVars.isProd = true;
    await handler(request, h);
    expect(h.redirect).toHaveBeenCalledTimes(1);
    expect(h.redirect).toHaveBeenCalledWith(
      `https://${economistConfig.domain}/${url}`
    );
    done();
  });

  it('should redirect to staging server when isStage is true and article is not in the list', async (done) => {
    envVars.isStage = true;
    await handler(request, h);
    expect(h.redirect).toHaveBeenCalledTimes(1);
    expect(h.redirect).toHaveBeenCalledWith(
      `https://${economistConfig.domain}/${url}`
    );
    done();
  });
});
