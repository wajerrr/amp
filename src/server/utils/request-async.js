import request from 'request';
import HttpError from './http-error';

const requestAsync = (options) =>
  new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        return resolve(body);
      }
      return reject(new HttpError(error, response.statusCode, body));
    });
  });

export default requestAsync;
