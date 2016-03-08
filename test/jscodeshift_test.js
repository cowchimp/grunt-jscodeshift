'use strict';

var grunt = require('grunt');

exports.jscodeshift = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  demo: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/code.js');
    var expected = grunt.file.read('test/expected/code.js');
    test.equal(actual, expected, 'should transform the source file');

    test.done();
  }
};
