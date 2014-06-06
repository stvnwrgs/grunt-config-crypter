/*
 * grunt-config-crypter
 * https://github.com/stvnwrgs/grunt-config-crypter
 *
 * Copyright (c) 2014 Steven Wirges
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },
    copy: {
      fixtures: {
        src: 'test/fixtures/*',
        dest: 'tmp/'
      },
    },

    // Configuration to be run (and then tested).
    config_crypter: {
      conf_config: {
        configs: [
          'tmp/test/fixtures/conf.json' 
        ]
      },
      mail_config: {
        configs: [
          'tmp/test/fixtures/mail.php' 
        ]
      },
      vhost_config: {
        configs: [
          'tmp/test/fixtures/vhost'
        ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', [
    'clean',
    'copy:fixtures',
    'config_crypter:vhost_config:encrypt:asdasd389457',
    'config_crypter:mail_config:decrypt:asdasd389457',
    'config_crypter:conf_config:plain:asdasd389457'
  ]);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
