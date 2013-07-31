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
      encoding: 'utf8'
    }),
    fsOptions = { // Filesystem access options
      encoding: options.encoding
    };
    
    this.files.forEach(function(file) {
      
      // Iterate src as that is where the actual files are
      file.src.forEach(function(src) {
        grunt.verbose.writeln('Processing file: ' + src);
           
        var content = grunt.file.read(src, fsOptions),
            trimmed = [],
            destination = src;
      
        // TODO: would multiline trim regex be more efficient?
        content.split("\n").forEach(function (line) {
          trimmed.push(line.replace(/\s+$/, ''));
        });
        
        // dest might be undefined, thus use same directory as src
        if (typeof file.dest !== 'undefined') {
          destination = file.dest + '/' + src.split('/').pop();
        }
        
        grunt.file.write(destination, trimmed.join("\n"), fsOptions);
        
      });
    });
    
  });

};
