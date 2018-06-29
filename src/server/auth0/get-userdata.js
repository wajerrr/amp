import requestAsync from '../utils/request-async';
import config from './config';

const getUserData = (accessToken) =>
  requestAsync({
    method: 'GET',
    json: true,
    url: `${config.auth0Url}/userinfo`,
    headers: {
      'content-type': 'application/json',
      Authorization: `BEARER ${accessToken}`,
    },
  });
export default getUserData;
