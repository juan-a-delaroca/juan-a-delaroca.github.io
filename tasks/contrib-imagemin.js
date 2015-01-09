module.exports = function(grunt) {
  
    grunt.config.set('imagemin', {

        dynamic: {
            files: [{
                expand: true,
                cwd: '<%= paths.src %>/img',
                src: ['**/*.{png,jpg,gif,svg}'],
                dest: '<%= paths.build %>/img',
                ext: '.min.{png,jpg,gif,svg}'
            }]
        }

    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

};