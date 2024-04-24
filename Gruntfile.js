module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dist/styles/main.css': 'main.less' 
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css' : 'main.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: false 
            },
            my_target: {
                files: [{
                    expand: true,
                    src: ['*.js'],
                    dest: 'dist/js/', 
                    ext: '.min.js' 
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};
