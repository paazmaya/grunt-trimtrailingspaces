/**
 * grunt-trimtrailingspaces
 * https://github.com/paazmaya/grunt-trimtrailingspaces
 *
 * Copyright (c) Juga Paazmaya <olavic@gmail.com>
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function gruntConf(grunt) {
  require('time-grunt')(grunt); // Must be first item
  require('jit-grunt')(grunt);

  grunt.initConfig({
    eslint: {
      options: {
        config: '.eslintrc',
        format: 'stylish'
      },
      target: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    trimtrailingspaces: {
      main: {
        options: {
          encoding: 'ascii'
        },
        files: {
          'tmp': [
            'test/fixtures/*'
          ]
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');


  grunt.registerTask('test', ['eslint', 'clean', 'trimtrailingspaces', 'nodeunit']);
  grunt.registerTask('default', ['test']);
};
