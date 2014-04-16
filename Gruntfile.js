/**
 * grunt-trimtrailingspaces
 * https://github.com/paazmaya/grunt-trimtrailingspaces
 *
 * Copyright (c) Juga Paazmaya <olavic@gmail.com>
 * Licensed under the MIT license.
 */
'use strict';
  
module.exports = function(grunt) {
  require('time-grunt')(grunt); // Must be first item

  grunt.initConfig({
    eslint: {
      options: {
        config: 'eslint.json',
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

  require('jit-grunt')(grunt);

  grunt.registerTask('test', ['eslint', 'clean', 'trimtrailingspaces', 'nodeunit']);
  grunt.registerTask('default', ['test']);
};
