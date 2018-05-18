import packagejson from '../../package.json';

export default {
  name: packagejson.name,
  version: packagejson.version,
  httpPort: +process.env.PORT || 8000,
  host: process.env.NODE_ENV === 'development' ? 'localhost' : '0.0.0.0',
};
