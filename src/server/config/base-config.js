import packagejson from '../../../package.json';
import { isDev } from '../utils/environment-detection';

export default {
  name: packagejson.name,
  version: packagejson.version,
  httpPort: process.env.PORT || 8000,
  host: isDev ? 'localhost' : '0.0.0.0',
};
