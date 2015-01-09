module.exports = function(grunt) {

    grunt.config.set('uglify', {

        expand: true,
        cwd: '<%= paths.src %>/js',
        src: ['*.js'],
        dest: '<%= paths.build %>/js',
        ext: '.js'

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

};
