import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { extractCritical } from 'emotion-server';

import template from './template';
import { isDev } from './utils/environment-detection';

const renderHtml = (data, path) => {
  /* eslint-disable global-require */
  const App = require('../app/app').default;
  const reactHTMLString = renderToStaticMarkup(<App url={path} data={data} />);

  const { css } = extractCritical(reactHTMLString);

  return template({
    canonicalUrl: data.canonical.url.canonical,
    title: data.canonical.headline,
    css,
    body: reactHTMLString,
    isDev,
  });
};

export default renderHtml;
