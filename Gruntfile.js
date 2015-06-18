module.exports = function(grunt) {
    var config = {
        srcDir: 'src/',
        minDir: 'dist/',
        name: 'angular-rating-yo'
    };

    grunt.initConfig({
        config: config,
        pkg: grunt.file.readJSON('package.json'),
        options: {

            "banner": '/*<%= pkg.name %> V<%= pkg.version %>, <%= pkg.description %>\n<%= pkg.author %>*/'
        },
        uglify: {
            minify: {
                options: {
                    banner: '<%= options.banner %>',
                    sourceMap: true,
                    drop_console: true,
                    mangle: {
                        except: ['jQuery']
                    }
                },
                files: {
                    '<%= config.minDir %><%= config.name %>.min.js': ['<%= config.srcDir %><%= config.name %>.js']
                }
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            files: ["<%= config.srcDir %><%= config.name %>.js"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('test', 'jshint');
    grunt.registerTask('build', ['test', 'uglify']);
    grunt.registerTask('default', 'build');
};
