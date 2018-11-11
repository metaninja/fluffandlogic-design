module.exports = function(grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  const sass = require('node-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: [
            { 'css/main.css' : 'css/main.scss' },
            { 'css/home.css' : 'css/scss/home.scss' },
            { 'css/why.css' : 'css/scss/why.scss' },
        ]
      }
    },

    watch: {
      options: {
        livereload: {
          port: 35728
        }
      },
      html: {
        files: [
          'shared/**/*.*',
          'pages/**/*.*',
          'css/**/*.*',
          'fonts/**/*.*',
          'js/**/*.*',
          'images/**/*.*'
        ]
      },
      css: {
        files: ['css/scss/**/*.scss'],
        tasks: ['compile']
      }
    },

    clean: {
      build: {
        src: ['.build']
      },
    },

    //
    copy: {
      main: {
        files: [
          {
            expand: true,
            src:
              [ '*.php',
                'pages/**',
                'css/*.css',
                'fonts/**',
                'images/**',
                'js/**',
              ],
            dest: '.build'
          }
        ]
      }
    },
  });

  grunt.registerTask('default', ['watch', 'sass']);
  grunt.registerTask('compile', ['sass']);
  grunt.registerTask('build',   ['sass', 'clean', 'copy']);
};
