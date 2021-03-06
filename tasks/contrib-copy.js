module.exports = function(grunt) {
  
    grunt.config.set('copy', {

        fontawesome: {
            expand: true,
            flatten: true,
            src: '<%= paths.vendor %>/fontawesome/fonts/**',
            dest: '<%= paths.src %>/fonts',
            filter: 'isFile'      
        },

        bootstrapglyphs: {
            expand: true,
            flatten: true,
            src: '<%= paths.vendor %>/bootstrap/fonts/**',
            dest: '<%= paths.src %>/fonts',
            filter: 'isFile'
        },

        fonts: {
            expand: true,
            flatten: true,
            src: '<%= paths.src %>/fonts/**',
            dest: '<%= paths.build %>/fonts',
            filter: 'isFile'    
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');

};