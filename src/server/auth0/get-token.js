import requestAsync from '../utils/request-async';
import config from './config';
import getUrl from '../utils/get-url';

const getToken = (code, returnURL) =>
  requestAsync({
    method: 'POST',
    json: true,
    url: `${config.auth0Url}/oauth/token`,
    headers: { 'content-type': 'application/json' },
    body: {
      grant_type: 'authorization_code',
      client_id: config.CLIENT_ID,
      client_secret: config.CLIENT_SECRET_ID,
      code,
      redirect_uri: getUrl(`/callback?return=${returnURL}`, true),
    },
  });

export default getToken;
