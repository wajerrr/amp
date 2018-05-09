import React from 'react';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';

import Hapi from 'hapi';

import template from './template';
import getGraphqlData from './get-graphql-data';

const config = {
  host: 'localhost',
  port: 8000,
};

const server = Hapi.server(config);

const generateRefUrl = (pathname) =>
  `https://www.economist.com/${pathname ||
    'news/world-week/21741222-politics-week'} `;

server.route({
  method: 'GET',
  path: '/{pathname*}',
  async handler(request) {
    try {
      const ref = generateRefUrl(request.params.pathname);

      const res = await getGraphqlData(ref);

      /* eslint-disable global-require */
      const App = require('../app/app').default;

      const reactHTMLString = renderToString(
        <App url={request.path} data={res.data} />
      );

      const { css } = extractCritical(reactHTMLString);

      return template({
        canonicalUrl: res.data.canonical.url.canonical,
        title: res.data.canonical.headline,
        css,
        body: reactHTMLString,
        isDev: process.env.NODE_ENV === 'development',
      });
    } catch (e) {
      /* eslint-disable-next-line no-console */
      console.error('Error: ', e);
      return e.toString();
    }
  },
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.error('error', err);
    process.exit(1);
  }
  /* eslint-disable-next-line no-console */
  console.info(
    `Server running at: ${
      server.info.uri
    } in ${process.env.NODE_ENV.toUpperCase()} mode`
  );
  return server;
}

export default start();
