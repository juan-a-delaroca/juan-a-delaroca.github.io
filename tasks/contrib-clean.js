module.exports = function(grunt) {
  
    grunt.config.set('clean', {

        // clean out build
        build: {
            src: '<%= paths.build %>',
            options: {
                force: true    
            }    
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');

};