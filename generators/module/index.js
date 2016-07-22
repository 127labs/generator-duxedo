'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var path = require('path');

module.exports = yeoman.Base.extend({
  constructor: function() {
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
    }
  },

  end: {
    logInstructions: function() {
      this.log('');
      this.log('Great, now import the module generated into your root reducer in src/reducer.js:');
      this.log('and your root epic in src/epic.js:');
      this.log('');
      this.log(chalk.green("import " + this.name + " from '" + this.name + "'"));
      this.log('');
      this.log('and add the reducer as part of the combineReducers: ');
      this.log('');
      this.log(chalk.green("[" + this.name + ".constants.NAME]: " + this.name + ".reducer"));
      this.log('');
      this.log('and add ' + this.name + 'epic as part of the combineEpics: ');
      this.log('');
      this.log(chalk.green("Object.values(" + this.name + ".epics)"));
      this.log('');
    }
  }
});
