/* import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { extractCritical } from 'emotion-server';

import template from './template';
import { isDev } from './utils/environment-detection';

const render404 = (error, path) => {
 
  const App = require('../app/app').default;
  const reactHTMLString = renderToStaticMarkup(
    <App url={path} data={error.data} is404 />
  );

  const { css } = extractCritical(reactHTMLString);

  return template({
    title: 'Page not found | The Economist',
    css,
    body: reactHTMLString,
    isDev,
  });
};

const renderHtmlError = (error, path) => {
  switch (error.status) {
    case 404:
      return render404(error, path);
    case 500:
      return `<p>${error.toString()}</p>`;
    default:
      return `<p>${error.toString()}</p>`;
  }
};

export default renderHtmlError;
 */
import React from 'react';
import renderHtmlError from './render-html-error';
import HttpError from './utils/http-error';
import template from './template';
import App from '../app/app';

jest.mock('../app/app', () => ({
  default: jest.fn().mockImplementation(() => <p>error</p>),
}));
const errorData = { data: 'errordata' };
const path = '/path';

describe('renderHtmlError', () => {
  beforeEach(() => {
    App.default.mockClear();
  });
  it('should return correct html string for 404 error', () => {
    const expected = template({
      title: 'Page not found | The Economist',
      css: '',
      body: '<p>error</p>',
    });
    expect(renderHtmlError(new HttpError('error', 404))).toEqual(expected);
  });

  it('should call App component with correct props for 404 error', () => {
    renderHtmlError(new HttpError('error', 404, errorData), path);

    expect(App.default).toHaveBeenCalledTimes(1);
    expect(App.default).toHaveBeenCalledWith(
      {
        data: errorData,
        url: path,
        is404: true,
      },
      expect.anything(),
      expect.anything()
    );
  });

  it('should return correct string for error with status 500', () => {
    expect(renderHtmlError(new HttpError('error', 500))).toEqual(
      '<p>HttpError: error</p>'
    );
  });
  it('should return dafault string for error with status diferent than 500 or 404', () => {
    expect(renderHtmlError(new Error('error'))).toEqual('<p>Error: error</p>');
  });
});
