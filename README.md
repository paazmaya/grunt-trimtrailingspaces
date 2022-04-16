# grunt-trimtrailingspaces

> Trim trailing spaces from each line of the selected files

[![Build Status](https://img.shields.io/travis/paazmaya/grunt-trimtrailingspaces.svg?style=flat-square)](https://app.travis-ci.com/paazmaya/grunt-trimtrailingspaces)
[![Maintainability](https://api.codeclimate.com/v1/badges/94ce97d2f05828f8ba0a/maintainability)](https://codeclimate.com/github/paazmaya/grunt-trimtrailingspaces/maintainability)

[![Built with Grunt](http://img.shields.io/badge/Grunt-1.0-blue.svg?style=flat-square)](http://gruntjs.com/)


## Getting Started

This plugin requires [Grunt](http://gruntjs.com/) `^1.1` and [Node.js](https://nodejs.org/en/)
version to be minimum of `14.15.0`, which is [the active Long Term Support (LTS) version](https://github.com/nodejs/Release#release-schedule).

Add this to your project's `Gruntfile.js` configuration:

```js
grunt.loadNpmTasks('grunt-trimtrailingspaces');
```

Then add `grunt-trimtrailingspaces` to your "package.json" dependencies. This can be done with:

```sh
npm install grunt-trimtrailingspaces --save-dev
```

Or by manually editing the `package.json` file by adding the following line inside `devDependencies` object:

```js
  "grunt-trimtrailingspaces": "^5.0.0"
```

Later on it would be possible to install the plugin with the command `npm install`

It can be updated with the command `npm update`, in case there is a newer version in the
[`npm` registry](https://www.npmjs.com/).

The name to use in your own task definitions is `trimtrailingspaces`.


## Documentation

Add an entry to your `Gruntfile.js`, within the `initConfig` object, which will define the
files of which will the trailing spaces to be removed.

By using the `src` property for selecting files to be processed, they are replaced by the ones processed.

By setting the `failIfTrimmed` option to true, the grunt task will fail after
trimming all files if any whitespace was removed.  This is very useful for
running trimtrailingspaces as a pre-commit task (in combination with
[`grunt-githooks`](https://github.com/rhumaric/grunt-githooks)), because it will
prevent the commit from going through which would not include the trimming
changes.

The examples below are using the [built-in custom filter property](http://gruntjs.com/configuring-tasks#custom-filter-function).

```js
  ...

  trimtrailingspaces: {
    main: {
      src: ['public_html/js/**/*.js'],
      options: {
        filter: 'isFile',
        encoding: 'utf8',
        failIfTrimmed: false
      }
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

For further information on how files are matched, please see the
documentation of the [`minimatch`](https://github.com/isaacs/minimatch) package,
as it is used underneath Grunt.

To run it:

```sh
grunt trimtrailingspaces
```

## Contributing

["A Beginner's Guide to Open Source: The Best Advice for Making your First Contribution"](http://www.erikaheidi.com/blog/a-beginners-guide-to-open-source-the-best-advice-for-making-your-first-contribution/).

[Also there is a blog post about "45 Github Issues Dos and Don’ts"](https://davidwalsh.name/45-github-issues-dos-donts).

Linting is done with [ESLint](http://eslint.org) and can be executed with `npm run lint`.
There should be no errors appearing after any JavaScript file changes.

## Version history

[Changes happening across different versions and upcoming changes are tracked in the `CHANGELOG.md` file.](CHANGELOG.md)

## License

Copyright (c) [Juga Paazmaya](https://paazmaya.fi) <paazmaya@yahoo.com>

Licensed under the [MIT license](LICENSE).
