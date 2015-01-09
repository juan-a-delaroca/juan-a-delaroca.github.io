module.exports = function (grunt) {

    grunt.config.set('concat', {

        options: {},

        js: {
            src: [
                '<%= paths.vendor %>/jquery/dist/jquery.js',
                '<%= paths.vendor %>/bootstrap/js/tooltip.js',
                '<%= paths.vendor %>/bootstrap/js/*.js',
                '<%= paths.src %>/js/index.js'
            ],
            dest: '<%= paths.build %>/js/index.js'
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');

};
