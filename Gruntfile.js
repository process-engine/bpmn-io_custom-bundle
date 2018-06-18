'use strict';

module.exports = function (grunt) {

  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);
}
