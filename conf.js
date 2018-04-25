// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

/*  specs: ['First test/spec.js']*/
suites:{
  firstTest:'First Test/spec.js'
},

capabilities:{
  browserName: 'chrome',
/*chromeOptions:{
    args:["--headless"]
  }*/
},

directConnect:true


}
