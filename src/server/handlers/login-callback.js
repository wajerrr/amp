import getToken from '../auth0/get-token';
import getUserData from '../auth0/get-userdata';

export const handler = async (req, h) => {
  let response;
  try {
    response = await getToken(req.query.code, req.query.return);
    await getUserData(response.access_token);
  } catch (error) {
    return h.response({ error }).redirect(`${req.query.return}#success=false`);
  }
  return h
    .response()
    .state('access_token', response.access_token, {
      maxAge: response.expires_in,
    })
    .redirect(`${req.query.return}#success=true`);
};

const route = {
  method: 'GET',
  path: '/callback',
  handler,
  config: {
    state: {
      parse: true,
      failAction: 'ignore',
    },
  },
};

export default route;
