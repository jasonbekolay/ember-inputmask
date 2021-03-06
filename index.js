/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-inputmask',
  options: {
    nodeAssets: {
      'inputmask': {
        vendor: [
          'dist/inputmask/dependencyLibs/inputmask.dependencyLib.js',
          'dist/inputmask/inputmask.js',
          'dist/inputmask/inputmask.extensions.js',
          'dist/inputmask/inputmask.date.extensions.js',
          'dist/inputmask/inputmask.numeric.extensions.js',
          'dist/inputmask/inputmask.phone.extensions.js'
        ]
      }
    }
  },
  included() {
    this._super.included.apply(this, arguments);
    if (!process.env.EMBER_CLI_FASTBOOT) {
      this.import('vendor/inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js');
      this.import('vendor/inputmask/dist/inputmask/inputmask.js');
      this.import('vendor/inputmask/dist/inputmask/inputmask.extensions.js');
      this.import('vendor/inputmask/dist/inputmask/inputmask.date.extensions.js');
      this.import('vendor/inputmask/dist/inputmask/inputmask.numeric.extensions.js');
      this.import('vendor/inputmask/dist/inputmask/inputmask.phone.extensions.js');
    }
  }
};
