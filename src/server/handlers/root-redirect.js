import economistConfig from '../config/economist';

const handler = (request, h) => h.redirect(`https://${economistConfig.domain}`);

const route = {
  method: 'GET',
  path: '/',
  handler,
};

export default route;
