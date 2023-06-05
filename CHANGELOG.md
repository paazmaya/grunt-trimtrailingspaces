# Version history for grunt-trimtrailingspaces

This changelog covers the version history and possible upcoming changes.
It follows the guidance from https://keepachangelog.com/en/1.0.0/.

## Unreleased

## `v6.0.0` (2022-05-29)
- Minimum supported Node.js version lifted from `10.13.0` to `14.15.0`
- Widen up peer dependency for Grunt

## `v5.0.0` (2020-05-28)
- Minimum Node.js version lifted from `8.11.1` to `10.13.0`
- Dependencies updated of course :tophat:
- Run tests with versions 10, 12, and 14 of Node.js at Travis CI

## `v4.0.0` (2019-01-22)
- Minimum Node.js version lifted from `6.9.5` to `8.11.1`. That is all.

## `v3.0.0` (2017-10-17)
- Minimum Node.js version lifted from `4.2.0` to `6.9.5`
- `main` property in `package.json` was pointing to a wrong file
- Finally got that `failIfTrimmed` feature unit tested #10

## `v2.3.1` (2016-08-10)
- Dependencies are sure :tophat: up to date
- Use shared ESLint configuration and ESLint directly without the Grunt.js plugin

## `v2.3.0` (2016-04-05)
- Update dependencies and remove `grunt-cli` from `devDependencies` as it is in `grunt` now

## `v2.2.0` (2016-03-02)
- Update dependencies again and allow using Grunt 1.0.0, that should come out soon

## `v2.1.0` (2016-02-15)
- Minimum Node.js version supported is `4.2.0` (LTS)
- Update dependencies

## `v2.0.0` (2015-10-20)
- Support Node.js 4+ only
- Slightly better output messaging

## `v1.1.0` (2014-11-29)
- Source copied to destination even when no trimming occurred

## `v1.0.0` (2014-11-10)
- Touch file only if it needs to be trimmed
- More efficient file handling with single regular expression check

## `v0.4.0` (2013-12-20)
- Fail if trimmed option and use case added

## `v0.3.2` (2013-11-07)
- Documentation for `filter` in examples

## `v0.3.1` (2013-08-28)
- Dependency update to Node.js `0.10` from `0.8`

## `v0.3.0` (2013-07-31)
- Added tests and made it possible to save processed files to other location

## `v0.2.1` (2013-07-25)
- Removed `string.js` dependency and use `grunt.file` API

## `v0.2.0` (2013-07-11)
- Support for Grunt `src` files array

## `v0.1.0` (2013-07-05)
- Initial release
