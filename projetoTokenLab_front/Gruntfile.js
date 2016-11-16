module.exports = function(grunt) {

        'use strict';
    var gruntConfig = {

        pkg: grunt.file.readJSON('package.json'),

        // ========= Concatenate JS =========
        concat: {
            css: {
                src: [
                    //'bootstrap-3.3.7-dist/css/bootstrap.css',
                    //'bootstrap-3.3.7-dist/css/bootstrap.css.map',
                    'node_modules/angular-ui-notification/dist/angular-ui-notification.css',
                    'css/**/*.css'
                    ],
                dest: 'prod/css/all.css'
            },
            js: {
                src: [
                    'node_modules/angular/angular.js',
                    'node_modules/jquery/dist/jquery.js',
                    'bootstrap-sass-3.3.7/assets/javascripts/bootstrap.js',
                    'node_modules/angular-route/angular-route.js',
                    'node_modules/angular-ui-notification/dist/angular-ui-notification.js',
                    'node_modules/angular-cookies/angular-cookies.js',
                    'js/**/*.js'
                ],
                dest: 'prod/js/all.js'
            }
        },

        // ========= Copy IMAGES =========
        copy: {
            main: {
                files: [
                    {
                        expand:true,
                        src: ['images/**'],
                        dest: 'prod/image/'
                    },
                    {
                        expand:true,
                        src: ['template/**'],
                        dest: 'prod/'
                    },
                    {
                        expand:true,
                        src: ['index.html'],
                        dest: 'prod/'
                    },
                    {
                        expand:true,
                        src: ['bootstrap-sass-3.3.7/assets/fonts/**/*'],
                        dest: 'prod/'
                    }
                ]
            }
        },

        // ========= Files to WATCH =========
        watch: {
            dist: {
                files: ['js/**/*', 'css/**/*', 'images/**/*', 'template/**/*', 'index.html'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        }
    };

    grunt.initConfig(gruntConfig);

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Tasks
    grunt.registerTask('default', [
                                    'concat:js',
                                    'concat:css',
                                    'copy',
                                ]);

};
