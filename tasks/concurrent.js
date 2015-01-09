module.exports = function(grunt) {
  
    grunt.config.set('concurrent', {
        
        target: {
            tasks: ['connect', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-concurrent');

};