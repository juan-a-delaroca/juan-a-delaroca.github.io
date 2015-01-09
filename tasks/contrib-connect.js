module.exports = function(grunt) {
  
    grunt.config.set('connect', {

        server: {
          options: {
            port: 9001,
            base: '.',
            keepalive: true,
            open: true
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-connect');

};
