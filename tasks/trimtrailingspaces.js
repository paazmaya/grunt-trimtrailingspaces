/*
 * grunt-trimtrailingspaces
 * https://github.com/paazmaya/grunt-trimtrailingspaces
 *
 * Copyright (c) 2013 Juga Paazmaya <olavic@gmail.com>
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  grunt.registerMultiTask('trimtrailingspaces', 'Removing the trailing spaces', function() {
      
    // Default options extended with user defined
    var options = this.options({
      encoding: 'utf8',
      failIfTrimmed: false
    }),
    fsOptions = { // Filesystem access options
      encoding: options.encoding
    },
    changed = []; // store which files are changed, for later logging, failure check, etc.
    
    this.files.forEach(function(file) {
      
      // Iterate src as that is where the actual files are
      file.src.forEach(function(src) {
        grunt.verbose.writeln('Processing file: ' + src);
           
        var content = grunt.file.read(src, fsOptions),
            trimming = [],
            trimmed = null,
            destination = src;
      
        // TODO: would multiline trim regex be more efficient?
        content.split('\n').forEach(function (line) {
          trimming.push(line.replace(/\s+$/, ''));
        });
        trimmed = trimming.join('\n');

        if (content !== trimmed) {
          changed.push(src);
        }

        // dest might be undefined, thus use same directory as src
        if (typeof file.dest !== 'undefined') {
          destination = file.dest + '/' + src.split('/').pop();
        }
        
        grunt.file.write(destination, trimmed, fsOptions);
        
      });
    });

    if (changed.length > 0 && options.failIfTrimmed) {
      grunt.warn(changed.length + ' files had whitespace trimmed, and the failIfTrimmed option is set to true.', 6);
    }
    
  });

};
