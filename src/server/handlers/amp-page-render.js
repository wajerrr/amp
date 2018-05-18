import getGraphqlData from '../get-graphql-data';
import renderHtml from '../render-html';
import { isProd, isStage } from '../utils/environment-detection';

import economistConfig from '../config/economist';

/* This method will be called now every time we hit this endpoint
 Maybe we should have env variable to detect what product it is
 as it won't change. */

const getDomain = (host) => {
  let product;
  switch (host) {
    case economistConfig.ampHost:
      product = economistConfig;
      break;
    default:
      product = economistConfig;
      break;
  }
  return product.domain;
};

export const handler = async (request, h) => {
  try {
    const ref = `${getDomain(request.headers.host)}/${request.params.pathname}`;
    const res = await getGraphqlData(ref);
    if (
      (isProd || isStage) &&
      res.data.canonical.isAccessibleForFree === false
    ) {
      return h.redirect(res.data.canonical.url.canonical);
    }
    return h.response(renderHtml(res.data, request.path));
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console.error('Error: ', e);
    return h.response(e.toString()).code(501);
  }
};
const route = {
  method: 'GET',
  path: '/{pathname*}',
  handler,
};

export default route;
