# grunt-trimtrailingspaces

> Trim trailing spaces from each line of the selected files


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
  "grunt-trimtrailingspaces": "~0.3.0"
```

Later on it would be possible to install the plugin with the command `npm install`

It can be updated with the command `npm update`, in case there is a newer version in the NPM repository.

The name to use in your own task definitions is `trimtrailingspaces`.


## Documentation

Add an entry to your "Gruntfile.js", within the `initConfig` object, which will define the 
files of which will the trailing spaces to be removed.

By using the `src` property for selecting files to be processed, they are replaced by the ones processed.

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

It is possible to save the processed files to a different location by using the `files` property, as shown below.
The destination (key) should be a directory path in which the src files (array value) are stored. 
No trailing slash needed.

Please note that this method will create a flat directory of the result.

```js
  ...

  trimtrailingspaces: {
    main: {
      files: {
        'public_html/js/trimmed': ['public_html/js/**/*.js']
      },
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

  
## Changelog

* 2013-07-31    v0.3.0    Added tests and made it possible to save processed files to other location
* 2013-07-25    v0.2.1    Removed `string.js` dependency and use `grunt.file` API
* 2013-07-11    v0.2.0    Support for Grunt 'src' files array
* 2013-07-05    v0.1.0    Initial release


## License
Copyright (c) 2013 Juga Paazmaya <olavic@gmail.com>

Licensed under the MIT license.
