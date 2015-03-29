module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      build: {
        src: ['js/inc/*.js'],
        dest: 'js/build.js',
      },
      deploy: {
        src: ['js/*.js'],
        dest: 'scripts.js',
      }
    },

    sass: {
      options: {
        style: 'normal'
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

    svgstore: {
      options: {
        prefix : '', // This will prefix each ID
        inheritviewbox: true,
        svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
          viewBox : '0 0 100 100',
          xmlns: 'http://www.w3.org/2000/svg',
          style: 'display:none'
        }
      },
      default: {
        files: {
          'assets/images/svg_sprite.svg' : ['assets/images/svg/*.svg'],
        }
      }
    },

    sprite:{
      all: {
        src: 'assets/images/packs/*.png',
        dest: 'assets/images/pack_sprite.png',
        destCss: 'scss/base/_pack-sprite.scss',
        cssFormat: 'css'
      }
    },

    watch: {
      css: {
        files: 'scss/**/*.scss',
        tasks: ['newer:sass', 'autoprefixer']
      },
      js: {
        files: ['js/*.js', 'js/**/*.js', '!js/build.js'],
        tasks: ['newer:concat']
      },
      svg: {
        files: 'assets/images/svg/*.svg',
        tasks: 'svgstore'
      },
      png: {
        files: 'assets/images/png/*.png',
        tasks: 'sprite'
      }
    }

  });


  // Load the plugins
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-spritesmith');

  // Default tasks
  grunt.registerTask('default', ['watch']);

}