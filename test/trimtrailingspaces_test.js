'use strict';

var grunt = require('grunt');
var fs = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.trimtrailingspaces = {
  testDefault: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default.txt'),
      expected = grunt.file.read('test/expected/default.txt');
    test.equal(actual, expected, 'Simple one line trim');

    test.done();
  },

  testNoChangeNoTrim: function(test) {
    test.expect(1);

    var original = grunt.file.read('test/fixtures/no-touch-no-trim.txt'),
      resulted = grunt.file.read('tmp/no-touch-no-trim.txt');

    test.equals(original, resulted, 'Contents of the file did not change');

    test.done();
  },

  testOtherLineEndsOldMac: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/other-line-ends-old-mac.txt'),
      expected = grunt.file.read('test/expected/other-line-ends-old-mac.txt');

    test.equals(actual, expected, 'Old Mac line endings respected');

    test.done();
  },

  testOtherLineEndsUnix: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/other-line-ends-unix.txt'),
      expected = grunt.file.read('test/expected/other-line-ends-unix.txt');

    test.equals(actual, expected, 'Unix line endings respected');

    test.done();
  },

  testOtherLineEndsWindows: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/other-line-ends-windows.txt'),
      expected = grunt.file.read('test/expected/other-line-ends-windows.txt');

    test.equals(actual, expected, 'Windows line endings respected');

    test.done();
  },

  
  testFailWhenTrimmed: function(test) {
    test.expect(1);

    grunt.util.spawn({
      grunt: true,
      args: ['trimtrailingspaces:failWhenTrimmed']
    }, function(err, result) {
      test.equals(result.code, 3, 'failIfTrimmed warning code');
      test.done();
    });
  }
  
};
