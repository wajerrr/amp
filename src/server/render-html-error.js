import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { extractCritical } from 'emotion-server';
import template from './template';
import { isDev } from './utils/environment-detection';
import { getCanonicalLinkTag } from './get-metadata';

export const errorMetadata = (url) => `${getCanonicalLinkTag(
  url
)}<title>Page not found | The Economist</title>
`;

const render404 = (error, url) => {
  /* eslint-disable global-require */
  const App = require('../app/app').default;
  const reactHTMLString = renderToStaticMarkup(<App data={error.data} is404 />);

  const { css } = extractCritical(reactHTMLString);
  return template({
    metadata: errorMetadata(url),
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
