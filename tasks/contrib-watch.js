module.exports = function (grunt) {

    grunt.config.set('watch', {

        scripts: {
            files: [
                './index.html',
                '<%= paths.src %>/*.js',
                '<%= paths.src %>/less/*.less',
                '<%= paths.src %>/images/*'
            ],
            tasks: [
                'imagemin',
                'less'
            ],
            options: {
                interrupt: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');

};