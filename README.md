# generator-duxedo
> No bullshit React + Redux boilerplate generator

Duxedo is an opinionated React + Redux boilerplate generator that includes various utilities to help you focus on writing your redux application and not worry about setting up.

### Usage

First, install [Yeoman](http://yeoman.io) and generator-duxedo using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-duxedo
```

Then, you will have these generators available to you:

```bash
yo duxedo [app-name]

yo duxedo:module [module-name]                          // WIP

yo duxedo:action [module-name] [action-name]            // WIP
yo duxedo:container [module-name] [container-name]      // WIP
yo duxedo:component [module-name] [component-name]      // WIP
```

### TODOs
- [x] React + redux template files
- [x] Generate initial boilerplate with yo
- [ ] Implement duxedo:module generator (create new module folder and append modules to rootReducer)
- [ ] Implement duxedo:action generator (append generator to actions.js and types.js of specified module-name)
- [ ] Implement duxedo:container generator (create new container file that generates smart component boilerplate)
- [ ] Implement duxedo:component generator (create new component file that generates dumb component boilerplate)

This project is currently in it's young stage, if you can find the time we encourage you to come join in and implement the todos. Feel free to open an issue or send a PR.
