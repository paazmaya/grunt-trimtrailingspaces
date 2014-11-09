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
        var destination = src;
        var trimmed = content.replace(/[ \f\t\v]*$/gm, '');
        if (content !== trimmed) {
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
