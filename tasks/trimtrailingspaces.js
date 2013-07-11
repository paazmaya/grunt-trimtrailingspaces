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
    var S = require('string'), // in case shelljs is present in the same configuration, error message 'to: wrong parametres' will be shown, but it has no effect on the functionality of this plugin
      fs = require('fs');
      
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
      
      var content = fs.readFileSync(
        file,
        fsOptions
      );
      
      var trimmed = [];
      content.split("\n").forEach(function (line) {
        trimmed.push(S(line).trimRight().s);
      });

      fs.writeFileSync(
        file,
        trimmed.join("\n"),
        fsOptions
      );

    });
    
  });

};
