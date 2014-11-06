/**
 * grunt-trimtrailingspaces
 * https://github.com/paazmaya/grunt-trimtrailingspaces
 *
 * Copyright (c) Juga Paazmaya <olavic@gmail.com>
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function trimtrailingspaces(grunt) {

  grunt.registerMultiTask('trimtrailingspaces', 'Removing the trailing spaces', function register() {

    // Default options extended with user defined
    var options = this.options({
      encoding: 'utf8',
      failIfTrimmed: false
    });
    var fsOptions = { // Filesystem access options
      encoding: options.encoding
    };
    var changedFiles = []; // store which files are changed, for later logging, failure check, etc.

    this.files.forEach(function filesEach(file) {

      // Iterate src as that is where the actual files are
      file.src.forEach(function srcEach(src) {
        grunt.verbose.writeln('Processing file: ' + src);

        var content = grunt.file.read(src, fsOptions);
        var trimming = [];
        var trimmed = null;
        var destination = src;
        var trimmedRows = [];

        var lineNumber = 1;
        content.split('\n').forEach(function lineEach(line) {
          var after = line.replace(/\s+$/, '');
          if (after !== line) {
            trimmedRows.push(lineNumber);
          }
          ++lineNumber;
          trimming.push(after);
        });
        trimmed = trimming.join('\n');

        if (trimmedRows.length > 0) {
          changedFiles.push(src);

          // dest might be undefined, thus use same directory as src
          if (typeof file.dest !== 'undefined') {
            destination = file.dest + '/' + src.split('/').pop();
          }

          grunt.file.write(destination, trimmed, fsOptions);
        }

      });
    });

    if (changedFiles.length > 0 && options.failIfTrimmed) {
      grunt.warn(changedFiles.length + ' files had whitespace trimmed, and the failIfTrimmed option is set to true.', 6);
    }

  });

};
