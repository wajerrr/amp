import getArticeQuery from './article-query';
import navigationQuery from './naviagtion-query';
import editorsPickQuery from './editors-pick-query';
import client from './graphql-client';
import HttpError from '../utils/http-error';

// TODO this is a bit shaky but only way I found to get graphQL error code
// it to parse message string from error they are providing
// mesaage has this structure "GraphQL error: 404: An error has occurred"
export const getErrorCode = (message = '') =>
  parseInt(message.split(': ')[1], 10) || 500;

export const GRAPH_QL_500_MSG =
  '500: Something went wrong with fetching GraphQL data';
export const GRAPH_QL_ARTICLE_404_MSG = '404: Article Does Not exist';

export const getContent = (query) =>
  new Promise((resolve) => {
    client
      .query({
        query,
      })
      .then(({ data }) => resolve(data))
      .catch(({ message }) =>
        resolve(new HttpError(GRAPH_QL_500_MSG, getErrorCode(message)))
      );
  });

export const processDataFromQueries = async (objectWithPromises) => {
  const promisesToResolve = [];
  const dataToReturn = {};

  Object.entries(objectWithPromises).forEach(([key, promise]) => {
    promisesToResolve.push(
      promise.then((result) => {
        dataToReturn[key] = result.data || result;
      })
    );
  });
  await Promise.all(promisesToResolve);
  return dataToReturn;
};

export const checkDataForErrors = (data) => {
  if (data.navigation instanceof Error || data.editorsPick instanceof Error) {
    throw new HttpError(GRAPH_QL_500_MSG);
  }
  if (data.article instanceof Error) {
    throw data.article.status === 404
      ? new HttpError(GRAPH_QL_ARTICLE_404_MSG, 404, { data })
      : new HttpError(GRAPH_QL_500_MSG);
  }
  return true;
};

const getData = async (ref) => {
  const data = await processDataFromQueries({
    article: getContent(getArticeQuery(ref)),
    navigation: getContent(navigationQuery),
    editorsPick: getContent(editorsPickQuery),
  });
  checkDataForErrors(data);
  return { data };
};

export default getData;
