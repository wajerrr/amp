require('babel-register')({
  presets: ['es2015', 'react'],
});
const generate = require('./generate-amp-test-data').default;

generate();
