require('babel-register')({
  presets: ['es2015', 'react'],
});
const validate = require('./amp-validator').default;

validate();
