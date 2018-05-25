import React from 'react';
import renderHtmlError from './render-html-error';
import HttpError from './utils/http-error';
import template from './template';
import App from '../app/app';

jest.mock('../app/app', () => ({
  default: jest.fn().mockImplementation(() => <p>error</p>),
}));
const errorData = { data: 'errordata' };
const url = 'http://www.theeco/com/to/sowhere/';

describe('renderHtmlError', () => {
  beforeEach(() => {
    App.default.mockClear();
  });
  it('should return correct html string for 404 error', () => {
    const expected = template({
      title: 'Page not found | The Economist',
      css: '',
      canonicalUrl: url,
      body: '<p>error</p>',
    });
    expect(renderHtmlError(new HttpError('error', 404), url)).toEqual(expected);
  });

  it('should call App component with correct props for 404 error', () => {
    renderHtmlError(new HttpError('error', 404, errorData));

    expect(App.default).toHaveBeenCalledTimes(1);
    expect(App.default).toHaveBeenCalledWith(
      {
        data: errorData,
        is404: true,
      },
      expect.anything(),
      expect.anything()
    );
  });

  it('should return dafault string for error with status diferent than 404', () => {
    expect(renderHtmlError(new Error('error'))).toEqual('<p>Error: error</p>');
  });
});
