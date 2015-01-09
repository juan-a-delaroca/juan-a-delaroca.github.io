module.exports = function (grunt) {

    grunt.config.set('watch', {

        scripts: {
            files: [
                'grunt/tasks',
                './index.html',
                'src/js/*.js',
                'src/less/*.less',
                'src/images/*',
                'src/fonts'
            ],
            tasks: ['imagemin', 'less', 'concat', 'copy'],
            options: {
                interrupt: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');

};