/*
 * grunt-config-crypter
 * https://github.com/stvnwrgs/grunt-config-crypter
 *
 * Copyright (c) 2014 Steven Wirges
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var CryptoJS = require("crypto-js");

  var encrypt = function (string, password) {
    var encrypted = CryptoJS.AES.encrypt(string, password);
    return encryptify(encrypted.toString());
  };

  var decrypt = function (string, password) {
    var decrypted = CryptoJS.AES.decrypt(string, password);
    var hexParsed = CryptoJS.enc.Hex.parse(decrypted.toString());
    return decryptify(hexParsed.toString(CryptoJS.enc.Utf8));
  };

  var encryptify = function (string) {
    return "encrypted("+string+")";

  };

  var decryptify = function (string) {
    return "decrypted("+string+")";
  };

  var playnify = function (string) {
    return string.substring(0,string.length-1).replace("encrypted(", "").replace("decrypted(", "");
  };

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('config_crypter', 'A Grunt Plugin for encrypting credentials in config files. Develop your app, create your configs. Then add your credentials and encrypt them. Push you changes, let them decrypt by your ci before you push the code to your server', function(func,password) {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });
      
    // Iterate over all specified file groups.
    this.data.configs.forEach(function(f) {
        // Warn on and remove invalid source files (if nonull was set).
      console.log("UIASHDKASH");

      if (!grunt.file.exists(f)) {
        grunt.log.warn('Source file "' + f + '" not found.');
        return false;
      }

      var fileContent = grunt.file.read(f);
      var variables = fileContent.match(/((decrypted\()|(encrypted\()).+(\))/g);
      
      var task = "";
      switch(func) {
          case "plain":
            task = function (string,passwrd) {
              return playnify(decrypt(string,password));
            };
            break;
          case "encrypt":
            task = encrypt;
            break;
          case "decrypt":
            task = decrypt;
            break;
          default:
            grunt.log.warn("Wrong function! Available: plain,encrypt,decrypt");
            return 0;
        }


      variables.forEach(function(variable) {
        // console.log(func(playnify(variable),password));
        var newValue = task(playnify(variable),password);
        console.log(newValue);
        fileContent = fileContent.replace(variable,newValue);
      });  

      console.log(fileContent);
      grunt.file.write(f, fileContent);


      // Print a success message.
      grunt.log.writeln('File "' + f + '" '+ func+'ed.');
    });
  });

};
