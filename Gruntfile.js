module.exports = function(grunt) {
    grunt.initConfig({
        // JSHint options
        jshint: {
            all: ['app.js', 'src/*.js'],
            ignores: ['node_modules']
        },

        watch: {
            files: ['app.js', 'src/**/*.js'],
            options: {
              livereload: true,
              interrupt: true,
              spawn: false
            }
        },

        'node-inspector': {
          custom: {
            options: {
              'web-port': 1336,
              'web-host': 'localhost',
              'debug-port': 5857,
              'save-live-edit': true,
              'stack-trace-limit': 4
            }
          }
        },

        nodemon: {
          dev: {
            options: {
              file: 'app.js',
              legacyWatch: true
            }
          }
        },

        concurrent: {
            dev: {
                tasks: ['watch', 'nodemon'],
                options: {
                    limit: 15,
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-node-inspector');
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('debug', ['concurrent:dev']);
    grunt.registerTask('server', function() {
      grunt.log.writeln('Started web server on port 8888');
      require('./app.js').listen(8888);
    })
}