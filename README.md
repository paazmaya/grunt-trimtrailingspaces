# grunt-trimtrailingspaces

Trim trailing spaces from each line of the selected files


## Getting Started

Add this to your project's `Gruntfile.js` gruntfile:
```js
grunt.loadNpmTasks('grunt-trimtrailingspaces');
```

Then add "grunt-trimtrailingspaces" to your package.json dependencies. This can be done with:
```js
npm install grunt-trimtrailingspaces --save-dev
```
Or by manually editing the "package.json" by adding the following line inside `devDependencies` object:
```js
  "grunt-trimtrailingspaces": "~0.2.0"
```

Later on it would be possible to install the plugin with the command `npm install`

It can be updated with the command `npm update`, in case there is a newer version in the NPM repository.

The name to use in your own task definitions is `trimtrailingspaces`.


## Documentation

Add an entry to your "Gruntfile.js", within the `initConfig` object, which will define the 
files of which will the trailing spaces to be removed.

```js
  ...

  trimtrailingspaces: {
    main: {
      src: ['public_html/js/**/*.js'],
      filter: 'isFile',
      encoding: 'utf8'
    }
  }

  ...
```

To run it:

```js
grunt trimtrailingspaces
```

## Dependencies

This module depends only on one 3rd party module, namely [string.js](http://stringjs.com/).


## Known issues

* In case `shelljs` is present in the same Grunt configuration, an error message `to: wrong parametres` will be shown,
  but it has no effect on the functionality of this plugin

## License
Copyright (c) 2013 Juga Paazmaya <olavic@gmail.com>

Licensed under the MIT license.
