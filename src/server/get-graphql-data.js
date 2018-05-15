import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          /* eslint-disable-next-line no-console */
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );

      if (networkError) {
        /* eslint-disable-next-line no-console */
        console.error(`[Network error]: ${networkError}`);
      }
    }),
    new HttpLink({
      uri: 'http://www.economist.com/graphql?version=v1',
      credentials: 'same-origin',
      fetch,
    }),
  ]),
  cache: new InMemoryCache(),
});

const getGraphqlData = async (ref) => {
  const query = gql`
        {
          canonical :canonical(ref: "${ref}") {
            ...C
          },
          editorsPick: canonical(ref: "/content/9qe6f6cm77btf0phaepjui01ckh6rfpu") {
            tegID
            id
            hasPart {
              parts {
                id
                channel {
                  headline
                  url {
                    canonical
                  }
                }
                headline
                subheadline
                description
                byline
                url {
                  canonical
                }
                image{
                  main {
                    width
                    height
                    url {
                      canonical
                    }
                  }
                }
              }
            }
          }

        }
        
        fragment C on Content {
          id
          tegID
          tegType
          type
          url {
            canonical
            comment
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
        `;
  try {
    return await client.query({
      query,
    });
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error('error', error);
    throw new Error(error);
  }
};
export default getGraphqlData;
