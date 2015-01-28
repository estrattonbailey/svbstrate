module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      scripts: {
        files: {
          'scripts.js': ['js/**.js', 'js/**.*.js']
        },
      },
    },

    sass: {
      options: {
        style: 'compressed'
      },
      dist: {
        files: {
          'scss/build.css': 'scss/style.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'ie 8', 'ie 9']
      },
      dist: {
        files: {
          'style.css': 'scss/build.css'
        }
      }
    },

    watch: {
      css: {
        files: 'scss/**/*.scss',
        tasks: ['sass', 'autoprefixer']
      },
      js: {
        files: 'js/*.js',
        tasks: ['concat']
      }
    }

  });


  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default tasks
  grunt.registerTask('default', ['watch']);

}