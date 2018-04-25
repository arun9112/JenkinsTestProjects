module.exports = function(grunt) {


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-contrib-connect');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-shell-spawn');

  var path = require('path');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
//pass in options to plugins, references to files etc
/*jshint: {
  files: ['Gruntfile.js', 'specs/*.js'],
  options: {
    // options here to override JSHint defaults
    globals: {
      jQuery: true,
      console: true,
      module: true,
      document: true
    }
  }
},*/

    /*

    ,

    protractor: {
      options: {
        keepAlive: true,
        configFile: "conf.js"
      },
      singlerun: {},
      auto: {
        keepAlive: true,
        options: {
          args: {
            seleniumPort: 4444
          }
        }
      }
    }

    */


    connect:{
        options:{
          port:4444,
          hostname:'localhost'
        },
        test:{
          options:{
            baseUrl: ['https://apmpreprod.apm.aws-usw02-pr.predix.io/ogd-demopreprod01/dashboards-sbx-qa/#/']
          }
        }
      },



    protractor:{

      options:{
        configFile:"conf.js",
        noColor: false,
        keepAlive: true,
        //debug:true,
        args:{suite:'firstTest'}
      },
      e2e:{
          options:{
            keepAlive:false
        }

      },
      continuous:{
        options:{
          keepAlive:true
        }
      }


    }




/*shell:{
  updateserver:{
    options:{
      stdout:true
    },
    command: "node " + path.resolve('node_modules/protractor/bin/webdriver-manager')+' update --standalone --versions.chrome 2.36'
    //"node " + path.resolve('node_modules/protractor/bin/webdriver-manager')+' update --standalone --versions.chrome 2.36'
    // 'webdriver-manager-update --standalone --versions.chrome 2.36'
  },
  startserver: {
    options:{
      stdout:false,
      stdin: false,
      stderr: false,
      async:true
    },
    command:'node ' + path.resolve('node_modules/protractor/bin/webdriver-manager') + ' start --standalone'
    //'node ' + path.resolve('node_modules/protractor/bin/webdriver-manager') + ' start --standalone'
    // 'webdriver-manager start --standalone'
  }*/




  });



//'connect:test',

  // Default task(s). ,'protractor:singlerun'     'shell:updateserver','shell:startserver',        ,'shell:startserver:kill'
  grunt.registerTask('test', ['connect:test','protractor:e2e']);
  //grunt.registerTask('default', ['jshint']);

};
