require('babel-register')({
  presets: ['es2015', 'react'],
});

let server = require('./server').default;
const { isDev } = require('./utils/environment-detection');

const start = async () => {
  try {
    await server.start();
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.error('error', err);
    process.exit(1);
  }

  if (process.env.NODE_ENV === undefined || process.env.ENV === undefined) {
    /* eslint-disable-next-line no-console */
    console.error('Please set NODE_ENV  and ENV before take off!');
    process.exit(1);
  }

  /* eslint-disable-next-line no-console */
  console.info(
    `Server running at: ${
      server.info.uri
    } in ${process.env.NODE_ENV.toUpperCase()} mode`
  );
  if (isDev) {
    /* eslint-disable-next-line import/no-extraneous-dependencies, global-require */
    const chokidar = require('chokidar');
    /* eslint-disable-next-line import/no-extraneous-dependencies, global-require */
    let io = require('socket.io')(server.listener);

    const serverWatcher = chokidar.watch('./src/server/');
    serverWatcher.on('ready', () => {
      serverWatcher.on('all', async () => {
        /* eslint-disable-next-line no-console */
        console.info('Clearing cache and restarting server');
        io.emit('reload-server-change');
        await server.stop({ timeout: 3000 });
        Object.keys(require.cache).forEach((id) => {
          if (id.includes('/src/server/')) delete require.cache[id];
        });
        /* eslint-disable-next-line import/no-extraneous-dependencies, global-require */
        server = require('./server').default;
        await server.start();
        /* eslint-disable-next-line import/no-extraneous-dependencies, global-require */
        io = require('socket.io')(server.listener);
        /* eslint-disable-next-line no-console */
        console.info('DONE');
      });
    });

    const clientWatcher = chokidar.watch('./src/app/');
    clientWatcher.on('ready', () => {
      clientWatcher.on('all', async () => {
        /* eslint-disable-next-line no-console */
        console.info('Clearing client cache and reloading');
        Object.keys(require.cache).forEach((id) => {
          if (id.includes('/src/app/')) delete require.cache[id];
        });
        io.emit('reload-client-change');
      });
    });
  }
};
start();
