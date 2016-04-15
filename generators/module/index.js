'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('name', {type: String, required: true});
  },

  initializing: {
    paths: function() {
      this.destinationRoot(path.join(this.config.get('modulesPath'), this.name));
    }
  },

  writing: {
    boilerplate: function() {
      this.fs.copy([
        this.templatePath('**/*'),
        '!**/*.ejs'
      ],
        this.destinationRoot()
      );
    },

    constantsJS: function() {
      this.fs.copyTpl(
        this.templatePath('constants.js.ejs'),
        this.destinationPath('constants.js'),
        { name: this.name }
      )
    },

    selectorsJS: function() {
      this.fs.copyTpl(
        this.templatePath('selectors.js.ejs'),
        this.destinationPath('selectors.js'),
        { name: this.name }
      )
    }
  },

  end: {
    logInstructions: function() {
      this.log('');
      this.log('You have created your ' + this.name + ' module successfully \n');
      this.log('Make sure to add this module to your rootReducer');
      this.log('');
    }
  }
});
