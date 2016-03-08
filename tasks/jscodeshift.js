/*
 * grunt-jscodeshift
 * https://github.com/cowchimp/grunt-jscodeshift
 *
 * Copyright (c) 2016 cowchimp
 * Licensed under the MIT license.
 */

'use strict';

var jscodeshiftRunner = require('jscodeshift/dist/Runner');
var path = require('path');

module.exports = function(grunt) {
  grunt.registerMultiTask('jscodeshift', 'Grunt task to run codemods using jscodeshift', function() {
    var opts = this.options({
      transform: './transform.js',
      verbose: 0,
      babel: true,
      extensions: 'js',
      runInBand: false,
      silent: false
    });
    var done = this.async();

    jscodeshiftRunner
      .run(path.resolve(opts.transform), this.filesSrc, opts)
      .then(function() {
        done(true);
      }, function() {
        done(false);
      });
  });
};
