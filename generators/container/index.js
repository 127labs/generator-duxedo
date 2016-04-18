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
    this.argument('containerName', {type: String, required: true});
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
      var renderedTemplate = ejs.render(template, {'_': _, containerName: this.containerName})

      fs.appendFile(this.destinationPath('index.js'), renderedTemplate, function(err) {
        if (err) throw err;
      })

      this.log(_.pascal(this.containerName) + ' container successfully appended to ' + path.join(this.moduleName, 'components', 'index.js'));
    },

    containerJS: function() {
      this.fs.copyTpl(
        this.templatePath('Container.jsx.ejs'),
        this.destinationPath(_.pascal(this.containerName) + '.jsx'),
        { '_': _, containerName: this.containerName }
      )
    }
  }
});
