module.exports = function (grunt) {

    grunt.config.set('concat', {

        options: {},

        js: {
            src: [
                '<%= paths.vendor %>/jquery/dist/jquery.js',
                '<%= paths.vendor %>/bootstrap/js/*.js',
                '<%= paths.src %>/js/*.js'
            ],
            dest: '<%= paths.build %>/js/index.js'
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');

};
