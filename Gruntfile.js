'use strict';

module.exports = function (grunt) {

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        dirs: {
            build: {
                root: 'build',
                node_root: 'node_modules',
                templates: '<%= dirs.build.root %>/templates',
                stylesheets: '<%= dirs.build.root %>/stylesheets',
                gov_uk_template: '<%= dirs.build.node_root %>/govuk_template_mustache/assets',
                govuk_frontend_toolkit: '<%= dirs.build.node_root %>/govuk-elements/govuk/public',
                gov_uk_elements: '<%= dirs.build.node_root %>/govuk-elements/public'
            },
            dist: {
                root: 'dist/public',
                stylesheets: '<%= dirs.dist.root %>/assets/stylesheets',
                images: '<%= dirs.dist.root %>/assets/images'
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '<%= dirs.dist.root %>',
                    livereload: true,
                    open: true
                }
            }
        },
        clean: {
            dist: {
                src: '<%= dirs.dist.root %>'
            }
        },
        mustache_hogan_html: {
            development: {
                options: {
                    src: '<%= dirs.build.templates %>',
                    dist: '<%= dirs.dist.root %>',
                    verbose: true
                }
            }
        },
        watch: {
            templates: {
                files: [
                    '<%= dirs.build.templates %>/**/*.mustache',
                    '<%= dirs.build.templates %>/pages/**/*.json'
                ],
                tasks: ['compile:mustache'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            styles: {
                files: ['<%= dirs.build.stylesheets %>/**/*.scss'],
                tasks: ['compile:sass'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
        copy: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= dirs.build.gov_uk_template %>/stylesheets/',
                        src: '**',
                        filter: 'isFile',
                        dest: '<%= dirs.dist.stylesheets %>'
                    },
                    {
                        expand: true,
                        cwd: '<%= dirs.build.govuk_frontend_toolkit %>/images',
                        src: '**',
                        filter: 'isFile',
                        dest: '<%= dirs.dist.images %>'
                    }
                ]
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: '<%= dirs.build.stylesheets %>',
                    cssDir: '<%= dirs.dist.stylesheets %>',
                    force: true,
                    importPath: [
                        '<%= dirs.build.gov_uk_elements %>/sass',
                        '<%= dirs.build.govuk_frontend_toolkit %>/sass'
                    ],
                    imagesDir: '<%= dirs.dist.images %>',
                    httpImagesPath: '/public/assets/images/'
                }
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'copy',
        'compile:mustache',
        'compile:sass',
        'connect:server',
        'watch'
    ]);

    grunt.registerTask('compile:mustache', [
        'mustache_hogan_html'
    ]);

    grunt.registerTask('compile:sass', [
        'compass'
    ]);
}
