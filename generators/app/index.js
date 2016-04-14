'use strict';
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
var path = require('path');

module.exports = yeoman.Base.extend({

  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('appName', {type: String, required: true});
  },

  writing: function () {
    // mkdir
    mkdirp(this.appName)

    // copy non-template files
    this.fs.copy([
      this.templatePath('**/*'),
      this.templatePath('.*'),
      '!**/*.ejs'
    ],
      path.join(this.destinationRoot(), this.appName)
    );

    //copy template files
    this.fs.copyTpl(
      this.templatePath('package.json.ejs'),
      path.join(this.destinationRoot(), this.appName, 'package.json'),
      { appName: this.appName }
    );

    this.fs.copyTpl(
      this.templatePath('README.md.ejs'),
      path.join(this.destinationRoot(), this.appName, 'README.md'),
      { appName: this.appName }
    );
  },

  install: function () {
    process.chdir(path.join(process.cwd(), this.appName));
    this.installDependencies({bower: false, cwd: this.appName});
  }
});
