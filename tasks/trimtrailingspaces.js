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
    });
    
    // Filesystem access options
    var fsOptions = {
      encoding: options.encoding
    };
     
    this.filesSrc.forEach(function(file) {
      grunt.verbose.writeln('Processing file: ' + file);
      
      var content = grunt.file.read(
        file,
        fsOptions
      );
      
      var trimmed = [];
      content.split("\n").forEach(function (line) {
        trimmed.push(line.replace(/\s+$/, ''));
      });

      grunt.file.write(
        file,
        trimmed.join("\n"),
        fsOptions
      );

    });
    
  });

};
