'use strict';

module.exports = function (grunt) {

  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {

      // create customized bower bundle
      bower: {
        files: {
          'dist/bpmn-modeler-custom.js': ['index.js']
        },
        options: {
          browserifyOptions: {
            standalone: 'BpmnJS',
            insertGlobalVars: {
              process: function () {
                return 'undefined';
              },
              Buffer: function () {
                return 'undefined';
              }
            }
          }
        }
      }
    },

    less: {
      options: {
        dumpLineNumbers: 'comments',
        paths: [
          'node_modules'
        ]
      },

      styles: {
        files: {
          'dist/bpmn-modeler-custom.css': 'style.less'
        }
      }
    },
  });

  //grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);
}
