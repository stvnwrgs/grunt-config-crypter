/*
 * grunt-config-crypter
 * https://github.com/stvnwrgs/grunt-config-crypter
 *
 * Copyright (c) 2014 Steven Wirges
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var crypto = require('crypto');
  
  var replace = function (fileContent, func) {

    return replacedContent;
  }

  var encryptify = function (string) {
    return "encrypted("+string+")";

  }

  var decryptify = function (string) {
    return "decrypted("+string+")";
  }

  var playinify = function (string) {
    return string.substring(0,string.length-1).replace("encrypted(", "");
  }

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('config_crypter', 'A Grunt Plugin for encrypting credentials in config files. Develop your app, create your configs. Then add your credentials and encrypt them. Push you changes, let them decrypt by your ci before you push the code to your server', function(func,password) {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });
    console.log(playinify(encryptify(func)))
    console.log(func);
    console.log(password);
      

    

    console.log(this.data.configs);
    // Iterate over all specified file groups.
    this.data.configs.forEach(function(f) {
        // Warn on and remove invalid source files (if nonull was set).
      if (!grunt.file.exists(f)) {
        grunt.log.warn('Source file "' + f + '" not found.');
        return false;
      } else {
        return true;
      }

      var fileContent = grunt.file.read(f);



      // Print a success message.
      grunt.log.writeln('File "' + src + '" created.');
    });
  });

};
