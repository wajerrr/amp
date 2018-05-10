import React from 'react';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import gql from 'graphql-tag';
import Hapi from 'hapi';
import fetch from 'node-fetch';

import template from './template';

const config = {
  host: 'localhost',
  port: 8000,
};

const server = Hapi.server(config);

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'http://www.economist.com/graphql?version=v1',
      credentials: 'same-origin',
      fetch,
    }),
  ]),
  cache: new InMemoryCache(),
});

const prodNavigation = '/content/b9b22pmtme3mcv43b3neeeh4h5gjh3g8';
// const stageNavigation = '/content/11i5sf2m5v0hmlknqrthfpvpi0or4peu';
const generateRefUrl = (pathname) =>
  `https://www.economist.com/${pathname ||
    'news/world-week/21741222-politics-week'} `;

server.route({
  method: 'GET',
  path: '/{pathname*}',
  async handler(request) {
    try {
      const ref = generateRefUrl(request.params.pathname);
      const query = gql`
        {
          canonical(ref: "${ref}") {
            ...C
          }
          navigation: canonical(ref: "${prodNavigation}") {
            ...N
          }
        }

        fragment C on Content {
          id
          tegID
          tegType
          type
          url {
            canonical
          }
          headline
          subheadline
          description
          datePublished
          byline
          text(format: "json")
          regionsAllowed
          isAccessibleForFree
          image {
            main {
              id
              width
              height
              headline
              url {
                canonical
              }
            }
          }
        }
        fragment N on Content {
          headline
          hasPart(sort: "isPartOf.context.position") {
            parts {
              headline
              url {
                canonical
              }
              hasPart(sort: "isPartOf.context.position") {
                parts {
                  headline
                  url {
                    canonical
                  }
                }
              }
            }
          }
        }
      `;
      const res = await client.query({
        query,
      });

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
      });
    } catch (e) {
      console.log('Error: ', e);

      return e.toString();
    }
  },
});

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log('error', err);
    process.exit(1);
  }
  console.log(
    `Server running at: ${
      server.info.uri
    } in ${process.env.NODE_ENV.toUpperCase()} mode`
  );
  return server;
}

export default start();
