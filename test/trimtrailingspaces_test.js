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

    grunt.task.run('trimtrailingspaces:default');

    var actual = grunt.file.read('tmp/default.txt'),
      expected = grunt.file.read('test/expected/default.txt');
    test.equal(actual, expected, 'Simple one line trim');

    test.done();
  },
  /*
  testFailWhenTrimmed: function(test) {
    test.expect(1);

    // Save original API
    var gruntWarn = grunt.fail.warn;

    // Rewite stub
    grunt.fail.warn = function (msg, code) {
      test.equals(code, 6, 'Failed task specifies error code as defined in the task registration');
    };
    
    // Run task
    grunt.option('force', true);
    grunt.task.run('trimtrailingspaces:failWhenTrimmed');

    // Restore original API
    grunt.fail.warn = gruntWarn;

    test.done();
  },
  */

  testNoChangeNoTrim: function(test) {
    test.expect(1);

    // Read original
    var original = fs.statSync('test/fixtures/no-touch-no-trim.txt');

    // Run task
    grunt.task.run('trimtrailingspaces:noChangeNoTrim');

    // Read after
    var after = fs.statSync('test/fixtures/no-touch-no-trim.txt');

    // Compare milliseconds
    test.equals(original.mtime.getTime(), after.mtime.getTime(), 'Modification time of the file did not change');

    test.done();
  },

  testOtherLineEndsOldMac: function(test) {
    test.expect(1);

    grunt.task.run('trimtrailingspaces:otherLineEndsOldMac');

    var actual = grunt.file.read('tmp/other-line-ends-old-mac.txt'),
      expected = grunt.file.read('test/expected/other-line-ends-old-mac.txt');

    test.equals(actual, expected, 'Old Mac line endings respected');

    test.done();
  },

  testOtherLineEndsUnix: function(test) {
    test.expect(1);

    grunt.task.run('trimtrailingspaces:otherLineEndsUnix');

    var actual = grunt.file.read('tmp/other-line-ends-unix.txt'),
      expected = grunt.file.read('test/expected/other-line-ends-unix.txt');

    test.equals(actual, expected, 'Old Mac line endings respected');

    test.done();
  }
};
