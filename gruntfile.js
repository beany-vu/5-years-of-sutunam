module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: '\n\n//------------------------------------------\n',
                banner: '\n\n//------------------------------------------\n'
            },
            dist: {
                src: ['components/scripts/stn_lib.js',
                    'components/scripts/home.js',
                    'components/scripts/about.js',
                    'components/scripts/main.js',
                    'components/scripts/slider.js'],
                dest: 'builds/development/js/script.js'
            }
        }, //concat
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'builds/development/js/script.min.js': ['builds/development/js/script.js'],
                    'builds/development/js/_bower.min.js': ['builds/development/js/_bower.js'],
                    'builds/development/js/analytics.min.js': ['builds/development/js/analytics.js'],
                }
            }
        },
        bower_concat: {
            all: {
                dest: 'builds/development/js/_bower.js',
                cssDest: 'builds/development/css/_bower.css'
            }
        },

        sass: {
            dist: {
                options: {
                    sourceMap: true,
                    style: 'expanded'
                },
                files: [{
                    src: 'components/sass/style.scss',
                    dest: 'builds/development/css/style.css'
                }]
            }
        }, //sass

        wiredep: {
            task: {
                src: 'builds/development/**/*.html'
            }
        },

        connect: {
            sever: {
                options: {
                    hostname: 'localhost',
                    port: 3000,
                    base: 'builds/development/',
                    livereload: true
                }
            }
        },

        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            scripts: {
                files: ['builds/development/**/*.html',
                    'components/scripts/**/*.js',
                    'components/sass/**/*.scss'],
                tasks: ['concat', 'sass']
            }
        }


    }); //initConfig
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-bower-concat');

    grunt.registerTask('default', ['wiredep', 'bower_concat', 'uglify', 'concat', 'sass', 'connect', 'watch']);

}; //wrapper function