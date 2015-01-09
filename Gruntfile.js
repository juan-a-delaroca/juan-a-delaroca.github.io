module.exports = function(grunt) {
  
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),

        paths: {
            vendor: 'vendor',
            src: 'src',
            build: 'build'
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask(
        'dev',
        'start local server and watch for changes to build',
        ['clean', 'imagemin', 'less', 'concat', 'copy', 'concurrent']
    );

    grunt.registerTask(
        'prod',
        'clean and package for production',
        ['clean', 'copy', 'imagemin', 'less', 'cssmin', 'uglify']
    );

    grunt.registerTask('default', ['dev', 'prod']);
};