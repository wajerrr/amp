require('babel-register')({
  presets: ['es2015', 'react'],
});
require('./server');

let server;
require('./server').default.then((serverObj) => {
  server = serverObj;
  if (process.env.NODE_ENV === 'development') {
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
        server = await require('./server').default;
        /* eslint-disable-next-line import/no-extraneous-dependencies, global-require */
        io = require('socket.io')(server.listener);
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
});
