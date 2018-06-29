import { isDev, isStage, isProd } from './environment-detection';
import config from '../config/economist';

const getUrl = (path, getFullDevDomain = false) => {
  let url;
  if (isDev) {
    url = getFullDevDomain ? `https://localhost:8001${path}` : path;
  }
  if (isStage || isProd) {
    url = `https://${config.ampDomain}${path}`;
  }
  return url;
};

export default getUrl;
