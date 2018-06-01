import getData from '../graphql/get-data';
import renderHtml from '../render-html';
import { isProd, isStage } from '../utils/environment-detection';
import availableArticles from '../config/available-articles';
import economistConfig from '../config/economist';
import renderHtmlError from '../render-html-error';

/* This method will be called now every time we hit this endpoint
 Maybe we should have env variable to detect what product it is
 as it won't change. */

const getDomain = (host) => {
  let product;
  switch (host) {
    case economistConfig.ampDomain:
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
    const res = await getData(ref);
    if ((isProd || isStage) && !availableArticles.includes(request.path)) {
      return h.redirect(`https://${economistConfig.domain}${request.path}`);
    }
    return h.response(renderHtml(res.data));
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(`Error: ${error.toString()}`);

    return h
      .response(
        renderHtmlError(error, `https://${request.headers.host}${request.path}`)
      )
      .code(error.status || 500);
  }
};
const route = {
  method: 'GET',
  path: '/{pathname*}',
  handler,
};

export default route;
