'use strict';

const wrap = require('eslint-wrapper-plugin');

module.exports = wrap({
  configs: {
    recommended: 'eslint-config-muriki',
    loose: 'eslint-config-muriki/loose',
    test: 'eslint-config-muriki/test',
  },
  plugins: [
    'import',
    'jasmine',
    'promise',
  ],
  prefix: 'muriki',
});
