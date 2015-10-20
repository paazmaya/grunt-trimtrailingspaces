/**
 * grunt-trimtrailingspaces
 * https://github.com/paazmaya/grunt-trimtrailingspaces
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com>
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function trimtrailingspaces(grunt) {

  grunt.registerMultiTask('trimtrailingspaces', 'Removing the trailing spaces', function register() {
    var taskSucceeded = true;

    // Default options extended with user defined
    var options = this.options({
      encoding: 'utf8',
      failIfTrimmed: false
    });
    var fsOptions = { // Filesystem access options
      encoding: options.encoding
    };

    var changedFileCount = 0;
    var fileCount = 0;
    var successCount = 0;

    this.files.forEach(function filesEach(file) {

      // Iterate src as that is where the actual files are
      file.src.forEach(function srcEach(src) {
        grunt.verbose.writeln('Processing file: ' + src);
        fileCount++;
        var content = grunt.file.read(src, fsOptions);
        var destination = src;
        // dest might be undefined, thus use same directory as src
        if (typeof file.dest === 'string') {
          if (!grunt.file.exists(file.dest)) {
            grunt.file.mkdir(file.dest);
          }
          destination = file.dest + '/' + src.split('/').pop();
        }

        var trimmed = content.replace(/[ \f\t\v]*$/gm, '');

        if (content !== trimmed) {
          grunt.log.ok('Needed trimming, file: ' + src);
          grunt.file.write(destination, trimmed, fsOptions);
          changedFileCount++;
        }
        else if (src !== destination) {
          // Copy to destination if not in place modification
          grunt.file.copy(src, destination, fsOptions);
        }
      });
    });

    successCount = fileCount - changedFileCount;
    grunt.log.ok(successCount + ' file' + (successCount === 1 ? '' : 's') + ' free of trailing whitespace.');

    if (changedFileCount > 0) {
      grunt.log.ok(changedFileCount + ' file' + (changedFileCount === 1 ? '' : 's') + ' had whitespace trimmed.');
      if (options.failIfTrimmed) {
        grunt.fail.warn(options.failMsg || 'The failIfTrimmed option is set to true.', 6);
      }
    }

    return taskSucceeded;
  });

};
