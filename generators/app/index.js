'use strict';
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('name', {type: String, required: true});
  },

  initializing: {
    makeDir: function() {
      mkdirp(this.name)
    },
  },

  prompting: {
    welcome: function() {
      this.log(yosay(
        'Welcome to the transcendent ' + chalk.red('duxedo') + ' generator!'
      ));
    },

    prompts: function() {
      var done = this.async();

      var prompts = [{
        type: 'input',
        name: 'author',
        message: 'Author name',
        default: 'Imran Ismail'
      }, {
        type: 'input',
        name: 'description',
        message: 'Project description',
        default: 'Awesome duxedo project'
      }, {
        type: 'input',
        name: 'domain',
        message: 'Surge Domain URL',
        default: '127labs.surge.sh'
      }, {
        type: 'input',
        name: 'dev_api',
        message: 'Development API endpoint',
        default: 'http://localhost:4000/api'
      }, {
        type: 'input',
        name: 'prod_api',
        message: 'Production API endpoint',
        default: 'http://127labs.herokuapp.com/api'
      }];

      this.prompt(prompts, function (props) {
        this.props = props;
        done();
      }.bind(this));
    }
  },

  configuring: {
    paths: function() {
      this.destinationRoot(path.join(process.cwd(), this.name));
    }
  },

  writing: {
    boilerplate: function() {
      this.fs.copy([
        this.templatePath('**/*'),
        this.templatePath('.*'),
        '!**/*.ejs'
      ],
        this.destinationRoot()
      );
    },

    packageJSON: function() {
      this.fs.copyTpl(
        this.templatePath('package.json.ejs'),
        this.destinationPath('package.json'),
        { name: this.name,
          author: this.props.author,
          description: this.props.description,
          domain: this.props.domain }
      );
    },

    readmeMD: function() {
      this.fs.copyTpl(
        this.templatePath('README.md.ejs'),
        this.destinationPath('README.md'),
        { name: this.name }
      );
    },

    settingsJS: function() {
      this.fs.copyTpl(
        this.templatePath('src/settings.js.ejs'),
        this.destinationPath('src/settings.js'),
        { dev_api: this.props.dev_api,
          prod_api: this.props.prod_api }
      );
    }
  },

  install: function () {
    this.installDependencies({bower: false});
  }
});
