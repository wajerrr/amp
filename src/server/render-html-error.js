import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { extractCritical } from 'emotion-server';

import template from './template';
import { isDev } from './utils/environment-detection';

const render404 = (error, path) => {
  /* eslint-disable global-require */
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
