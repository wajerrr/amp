import fs from 'fs';
import { execSync } from 'child_process';
import config from '../config';

let lastCommit = 'unknown';
try {
  // git will resolve outside a container, `/code/last_commit.txt` is pushed into a container
  lastCommit =
    execSync('git log -1 --oneline 2>/dev/null|| cat /code/last_commit.txt', {
      encoding: 'utf-8',
    }).trim('\n') || 'unknown';
} catch (err) {
  /* eslint-disable-next-line no-console */
  console.error('Could Not read last commit from  /code/last_commit.txt', err);
}

let buildNumber = 'unknown';
try {
  buildNumber = fs
    .readFileSync('build_number.txt')
    .toString('utf-8')
    .trim();
} catch (err) {
  /* eslint-disable-next-line no-console */
  console.error('Could not read build_number.txt', err);
}

const gigabitInBytes = 1000 * 1000;
const stats = {
  buildNumber,
  name: config.name,
  version: config.version,
  last_commit: lastCommit,
  messages: Object.keys(process.env)
    .map(
      (i) =>
        i.match(/^(NODE_ENV|API_|ENV$)/)
          ? [i, ': ', process.env[i]].join('')
          : false
    )
    .filter((i) => i),
};
const status = 200;

const handler = (request, h) =>
  h
    .response(
      Object.assign(stats, {
        status,
        memoryUsage: process.memoryUsage().rss / gigabitInBytes,
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
