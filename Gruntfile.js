/*
 * grunt-jscodeshift
 * https://github.com/cowchimp/grunt-jscodeshift
 *
 * Copyright (c) 2016 cowchimp
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      tests: ['tmp']
    },
    copy: {
      demo: {
        files: [ { src: 'test/fixtures/code.js', dest: 'tmp/code.js' } ]
      }
    },
    jscodeshift: {
      demo: {
        options: {
          transform: './test/fixtures/transform.js'
        },
        src: ['tmp/code.js']
      }
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'copy', 'jscodeshift', 'nodeunit']);

  grunt.registerTask('default', ['test']);
};
