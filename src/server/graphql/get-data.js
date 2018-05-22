import getArticeQuery from './article-query';
import navigationQuery from './naviagtion-query';
import editorsPickQuery from './editors-pick-query';
import client from './graphql-client';
import HttpError from '../utils/http-error';

// TODO this is a bit shaky but only way I found to get graphQL error code
// it to parse message string from error they are providing
// mesaage has this structure "GraphQL error: 404: An error has occurred"
const getErrorCode = (message) => parseInt(message.split(': ')[1], 10) || 500;

const GRAPH_QL_500_MSG = '500: Something went wrong with fetching GraphQL data';

export const getContent = (query) =>
  new Promise((resolve, reject) => {
    client
      .query({
        query,
      })
      .then(({ data }) => resolve(data))
      .catch(() => reject(new HttpError(GRAPH_QL_500_MSG)));
  });

export const getArticleContent = (query) =>
  new Promise((resolve, reject) => {
    client
      .query({
        query,
      })
      .then(({ data }) => resolve(data))
      .catch((error) => {
        const errorStatus = getErrorCode(error.message);
        return errorStatus === 404
          ? resolve(new HttpError('404 ARTICLE DOES NOT EXIST', 404))
          : reject(new HttpError(GRAPH_QL_500_MSG));
      });
  });

const processDataFromQueries = async (objectWithPromises) => {
  const promisesToResolve = [];
  const dataToReturn = { data: {} };

  Object.entries(objectWithPromises).forEach(([key, promise]) => {
    promisesToResolve.push(promise);
    promise.then((result) => {
      dataToReturn.data[key] = result[key] || result;
      return Promise.resolve();
    });
  });
  await Promise.all(promisesToResolve);

  if (dataToReturn.data.canonical instanceof Error) {
    throw dataToReturn.data.canonical;
  }

  return dataToReturn;
};

const getData = (ref) =>
  processDataFromQueries({
    canonical: getArticleContent(getArticeQuery(ref)),
    navigation: getContent(navigationQuery),
    editorsPick: getContent(editorsPickQuery),
  });

export default getData;
