'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var ejs = require('ejs');
var fs = require('fs');
var _ = require('case');

module.exports = yeoman.Base.extend({
  constructor: function() {
    yeoman.Base.apply(this, arguments);
    this.argument('moduleName', {type: String, required: true});
    this.argument('componentName', {type: String, required: true});
  },

  initializing: {
    paths: function() {
      fs.statSync(path.join(this.config.get('modulesPath'), this.moduleName), function(err) {
        if (err) throw err;
      })

      this.destinationRoot(path.join(this.config.get('modulesPath'), this.moduleName, 'components'));
    }
  },

  writing: {
    appendIndex: function() {
      var template = this.fs.read(this.templatePath('index.js.ejs'));
      var renderedTemplate = ejs.render(template, {'_': _, componentName: this.componentName})

      fs.appendFile(this.destinationPath('index.js'), renderedTemplate, function(err) {
        if (err) throw err;
      })

      this.log(_.pascal(this.componentName) + ' component successfully appended to ' + path.join(this.moduleName, 'components', 'index.js'));
    },

    containerJS: function() {
      this.fs.copyTpl(
        this.templatePath('Component.js.ejs'),
        this.destinationPath(_.pascal(this.componentName) + '.js'),
        { '_': _, componentName: this.componentName }
      )
    }
  }
});
