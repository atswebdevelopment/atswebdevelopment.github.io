module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-bower-task")
  grunt.loadNpmTasks("grunt-contrib-watch")
  grunt.loadNpmTasks("grunt-contrib-sass")
  grunt.loadNpmTasks("grunt-contrib-jshint")
  grunt.loadNpmTasks("grunt-contrib-concat")
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-babel')

  grunt.initConfig({
    sass: {
      dist: {
        options: {
            style: "compressed"
        },
        files: [
          {
              "css/main.css": "css/sass/main.scss",
          }
        ]
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        globals: {
          jQuery: false
        },
      },
      files: {
        src: [
          "scripts/js/*.js"
        ]
      }
    },
    concat: {
      scripts: {
        src: ["scripts/js/*.js"],
        dest: "scripts/main.js",
      }
    },
    babel: {
      dist: {
        files: {
          "scripts/main.js": "scripts/main.js"
        },
        options: {
          sourceMap: true,
          presets: ["@babel/preset-env"]
        }
      }
    },
    uglify: {
      build: {
        src: "scripts/main.js",
        dest: "scripts/main.min.js"
      }
    },
    watch: {
      sass: {
        files: ["css/sass/*.scss", "css/sass/**/*.scss"],
        tasks: ["sass"]
      },
      scripts: {
        files: ["scripts/js/*.js"],
        tasks: ["concat", "babel:dist", "uglify:build"]
      }
    }
  })
}
