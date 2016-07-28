[![Stories in Ready](https://badge.waffle.io/127labs/generator-duxedo.png?label=ready&title=Ready)](https://waffle.io/127labs/generator-duxedo)
# Duxedo
> No bullshit React + Redux project generator

Duxedo is a highly opinionated React + Redux project generator that includes various utilities to help you focus on what you do best, and forget the configuration for once.

### Motivation
Getting into react development is a very challenging task. First, you need to configure webpack, then you need to configure a redux store. You can't have a react app without a router right, now you need to find and configure the router. With duxedo, our goal is to take the pain off setting up a react + redux project by using a generator akin to that of frameworks like Rails or Phoenix for the React and Redux stack.

### Features
1. React
3. Redux
4. Redux Observable
5. React Router
6. Karma + Chai + Sinon
7. Hot Module Reloading OOTB
8. Webpack
9. Sass with autoprefix
10. Optional linting using [StandardJS](https://github.com/feross/standard)
11. Highly opinionated [ducks architecture](https://github.com/erikras/ducks-modular-redux)

### Usage

First, install [Yeoman](http://yeoman.io) and generator-duxedo using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-duxedo
```

Then, you will have these generators available to you:

```bash
yo duxedo <app-name>
yo duxedo:module <module-name>
yo duxedo:action <module-name> <actionName>
yo duxedo:container <module-name> <container-name>
yo duxedo:component <module-name> <component-name>
```

### TODOs
- [x] React + redux template files
- [x] Generate initial boilerplate with yo
- [x] Implement duxedo:module generator (create new module folder and append modules to rootReducer)
- [x] Implement duxedo:action generator (append generator to actions.js and types.js of specified module-name)
- [x] Implement duxedo:container generator (create new container file that generates smart component boilerplate)
- [x] Implement duxedo:component generator (create new component file that generates dumb component boilerplate)

This project is currently in it's young stage, if you can find the time we encourage you to come join in and implement the todos. Feel free to open an issue or send a PR.
