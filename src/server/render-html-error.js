import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { extractCritical } from 'emotion-server';
import template from './template';
import { isDev } from './utils/environment-detection';

const render404 = (error, url) => {
  /* eslint-disable global-require */
  const App = require('../app/app').default;
  const reactHTMLString = renderToStaticMarkup(<App data={error.data} is404 />);

  const { css } = extractCritical(reactHTMLString);
  return template({
    title: 'Page not found | The Economist',
    canonicalUrl: url,
    css,
    body: reactHTMLString,
    isDev,
  });
};

const renderHtmlError = (error, url) => {
  switch (error.status) {
    case 404:
      return render404(error, url);
    default:
      return `<p>${error.toString()}</p>`;
  }
};

export default renderHtmlError;
