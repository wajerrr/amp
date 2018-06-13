import React from 'react';
import renderHtmlError, { errorMetadata } from './render-html-error';
import HttpError from './utils/http-error';
import template from './template';
import App from '../app/app';

jest.mock('../app/app', () => ({
  default: jest.fn().mockImplementation(() => <p>error</p>),
}));

jest.mock('./template', () => jest.fn().mockImplementation(() => ''));

const errorData = { data: 'errordata' };
const url = 'http://www.theeco/com/to/sowhere/';

describe('renderHtmlError', () => {
  beforeEach(() => {
    App.default.mockClear();
    template.mockClear();
  });
  it('should call template component with correct arguments', () => {
    renderHtmlError(new HttpError('error', 404), url);
    expect(template).toHaveBeenCalledTimes(1);
    expect(template).toHaveBeenCalledWith({
      body: '<p>error</p>',
      css: '',
      isDev: false,
      metadata: errorMetadata(url),
    });
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
