module.exports = function(grunt) {

    grunt.config.set('less', {
            
        app: {
            options: {
                paths: [
                    '<%= paths.vendor %>/bootstrap/less',
                    '<%= paths.vendor %>/fontawesome/less'
                ]
            },

            files: {
                '<%= paths.build %>/css/index.css': '<%= paths.src %>/less/index.less'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');

};