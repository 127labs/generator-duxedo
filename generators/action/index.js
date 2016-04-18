'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var ejs = require('ejs');
var fs = require('fs');
var chalk = require('chalk');
var _ = require('case');

module.exports = yeoman.Base.extend({
  constructor: function() {
    yeoman.Base.apply(this, arguments);
    this.argument('moduleName', {type: String, required: true});
    this.argument('actionName', {type: String, required: true});

    if (_.of(this.actionName) !== 'camel') {
      this.log(chalk.red('Please enter your action in camelCase!'));
      process.exit(1);
    }
  },

  initializing: {
    paths: function() {
      fs.statSync(path.join(this.config.get('modulesPath'), this.moduleName), function(err) {
        if (err) throw err;
      })

      this.destinationRoot(path.join(this.config.get('modulesPath'), this.moduleName));
    }
  },

  writing: {
    appendAction: function() {
      var template = this.fs.read(this.templatePath('action.js.ejs'));
      var renderedTemplate = ejs.render(template, {'_': _, actionName: this.actionName});

      fs.appendFile(this.destinationPath('actions.js'), renderedTemplate, function(err) {
        if (err) throw err;
      });

      this.log(this.actionName + ' action successfully appended to ' + path.join(this.moduleName, 'actions.js'));
    },

    appendTypes: function() {
      var template = this.fs.read(this.templatePath('types.js.ejs'));
      var renderedTemplate = ejs.render(template, {'_': _, actionName: this.actionName});

      fs.appendFile(this.destinationPath('types.js'), renderedTemplate, function(err) {
        if (err) throw err;
      });

      this.log(this.actionName + ' type successfully appended to ' + path.join(this.moduleName, 'types.js'));
    }
  }
});
