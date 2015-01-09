module.exports = function(grunt) {

    grunt.config.set('cssmin', {

        app: {
            files: [{
                expand: true,
                cwd: '<%= paths.src %>/css',
                src: ['*.css'],
                dest: '<%= paths.build %>/css',
                ext: '.css'
            }],
            options: {
                keepSpecialComments: 0
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

};
