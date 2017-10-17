/**
 * grunt-trimtrailingspaces
 * https://github.com/paazmaya/grunt-trimtrailingspaces
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function gruntConf(grunt) {
  require('time-grunt')(grunt); // Must be first item
  require('jit-grunt')(grunt);

  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    trimtrailingspaces: {
      default: {
        options: {
          encoding: 'ascii'
        },
        files: {
          tmp: ['test/fixtures/default.txt']
        }
      },
      noChangeNoTrim: {
        files: {
          tmp: [
            // Gets only copied to tmp
            'test/fixtures/no-touch-no-trim.txt'
          ]
        }
      },
      otherLineEndsOldMac: {
        files: {
          tmp: ['test/fixtures/other-line-ends-old-mac.txt']
        }
      },
      otherLineEndsUnix: {
        files: {
          tmp: ['test/fixtures/other-line-ends-unix.txt']
        }
      },
      otherLineEndsWindows: {
        files: {
          tmp: ['test/fixtures/other-line-ends-windows.txt']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['clean', 'trimtrailingspaces', 'nodeunit']);
  grunt.registerTask('default', ['test']);

};
