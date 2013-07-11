/*
 * grunt-trimtrailingspaces
 * https://github.com/paazmaya/grunt-trimtrailingspaces
 *
 * Copyright (c) 2013 Juga Paazmaya <olavic@gmail.com>
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('trimtrailingspaces', function() {
    var S = require('string'), // in case shelljs is present in the same configuration, error message 'to: wrong parametres' will be shown, but it has no effect on the functionality of this plugin
      fs = require('fs'),
      conf = grunt.config('trimtrailingspaces');

    if (!conf.directories || conf.directories.length === 0) {
      return ;
    }

    conf.directories.forEach(function (directory) {
      grunt.verbose.writeln( 'Processing directory: ' + directory );
      
      var dir = fs.readdirSync(directory);
      dir.forEach(function (filename) {

        var ext = filename.split('.').pop();
        var path = directory + '/' + filename;

        var st = fs.statSync(path);

        if (conf.extensions.indexOf(ext) !== -1 && st.isFile()) {
          grunt.verbose.writeln( 'Processing path: ' + path );

          var content = fs.readFileSync(
            path,
            {encoding: conf.encoding}
          );

          var trimmed = [];
          content.split("\n").forEach(function (line) {
            trimmed.push(S(line).trimRight().s);
          });

          fs.writeFileSync(
            path,
            trimmed.join("\n"),
            {encoding: conf.encoding}
          );
        }
      });
    });
  });

};
