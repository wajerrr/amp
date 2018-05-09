require('babel-register')({
  presets: ['es2015', 'react'],
});
const genrate = require('./generate-amp-test-data').default;

genrate();
