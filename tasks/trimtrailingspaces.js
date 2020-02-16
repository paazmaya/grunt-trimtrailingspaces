/**
 * grunt-trimtrailingspaces
 * https://github.com/paazmaya/grunt-trimtrailingspaces
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */


const path = require('path');

module.exports = function trimtrailingspaces(grunt) {

  const getDestination = (src, dest) => {
    let destination = src;

    // dest might be undefined, thus use same directory as src
    if (typeof dest === 'string') {
      if (!grunt.file.exists(dest)) {
        grunt.file.mkdir(dest);
      }
      destination = path.join(dest, path.basename(src));
    }

    return destination;
  };

  const logResult = (changedFileCount, options) => {
    if (changedFileCount > 0) {
      grunt.log.ok(changedFileCount + ' file' + (changedFileCount === 1 ?
        '' :
        's') + ' had whitespace trimmed.');
      if (options.failIfTrimmed) {
        grunt.fail.warn(options.failMsg || 'The failIfTrimmed option is set to true.', 6);
      }
    }
  };

  grunt.registerMultiTask('trimtrailingspaces', 'Removing the trailing spaces', function register() {

    // Default options extended with user defined
    const options = this.options({
      encoding: 'utf8',
      failIfTrimmed: false
    });
    const fsOptions = { // Filesystem access options
      encoding: options.encoding
    };

    let changedFileCount = 0;
    let fileCount = 0;
    let successCount = 0;

    const filesEach = function filesEach(file) {

      // Iterate src as that is where the actual files are
      file.src.forEach((src) => {
        grunt.verbose.writeln('Processing file: ' + src);
        fileCount++;
        const content = grunt.file.read(src, fsOptions);
        const destination = getDestination(src, file.dest);

        const trimmed = content.replace(/[ \f\t\v]*$/gmu, '');

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
    };

    this.files.forEach(filesEach);

    successCount = fileCount - changedFileCount;
    grunt.log.ok(successCount + ' file' + (successCount === 1 ?
      '' :
      's') + ' free of trailing whitespace.');

    logResult(changedFileCount, options);
  });
};
