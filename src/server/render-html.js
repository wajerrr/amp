import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { extractCritical } from 'emotion-server';

import template from './template';
import { isDev } from './utils/environment-detection';
import getMetdata from './get-metadata';

const renderHtml = (data) => {
  /* eslint-disable global-require */
  const App = require('../app/app').default;
  const reactHTMLString = renderToStaticMarkup(<App data={data} />);

  const { css } = extractCritical(reactHTMLString);
  const metadata = getMetdata(data.article);
  return template({
    css,
    body: reactHTMLString,
    metadata,
    isDev,
  });
};

export default renderHtml;
