import { isDev, isStage, isProd } from './environment-detection';
import config from '../config/economist';

const getUrl = (path) => {
  let url;
  if (isDev) {
    url = path;
  }
  if (isStage || isProd) {
    url = `https://${config}${path}`;
  }
  return url;
};

export default getUrl;
