import fs from 'fs';
import { execSync } from 'child_process';
import config from '../config/base-config';
import { isProd, isStage } from '../utils/environment-detection';

let lastCommit = 'only in production';
let buildNumber = 'only in production';
if (isProd || isStage) {
  try {
    lastCommit =
      execSync('cat /code/last_commit.txt', {
        encoding: 'utf-8',
      }).trim('\n') || 'unknown';
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.error(
      'Could Not read last commit from  /code/last_commit.txt',
      err
    );
  }
  try {
    buildNumber = fs
      .readFileSync('build_number.txt')
      .toString('utf-8')
      .trim();
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.error('Could not read build_number.txt', err);
  }
}

export const listEnvVariables = (env) =>
  Object.keys(env)
    .map(
      (i) =>
        i.match(/^(NODE_ENV|API_|ENV$)/)
          ? [i, ': ', process.env[i]].join('')
          : false
    )
    .filter((i) => i);

const stats = {
  buildNumber,
  name: config.name,
  version: config.version,
  last_commit: lastCommit,
  messages: listEnvVariables(process.env),
};

export const status = 200;
export const gigabitInBytes = 1000 * 1000;

const getMemoryUsage = () => process.memoryUsage().rss / gigabitInBytes;

const handler = (request, h) =>
  h
    .response(
      Object.assign(stats, {
        status,
        memoryUsage: getMemoryUsage(),
      })
    )
    .code(status)
    .header('Content-Type', 'application/json;charset=utf-8')
    .header('Cache-Control', 'max-age=0, must-revalidate');

const route = {
  method: 'GET',
  path: '/healthcheck',
  handler,
};

export default route;
