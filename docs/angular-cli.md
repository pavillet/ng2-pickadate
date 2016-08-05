
# Angular CLI Configuration
`Angular-CLI` is a CLI for making Angular 2 applications. In order to integrate `ng2-pickadate` into a CLI project we must install the ng2-pickadate and it's dependencies using NPM and edit the CLI project configuration so that the CLI project knows where to look for the ng2-pickadate.

## Installation
`npm install ng2-pickadate --save`

## Setup
The `angular-cli-build.js` and `system-config.ts` files must be updated for the CLI project to know where to find `ng2-pickadate`.

### angular-cli-build.js
The `vendorNpmFiles` array in the `angular-cli-build.js` file must be updated to include ng2-pickadate and it's dependencies.

```js
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',

      // ng2-pickadate
      'ng2-pickadate/**/*.js',
      'jquery/**/*.js',
      'pickadate/**/*.js'
    ]
```

### system-config.ts
The `map` and `packages` constants must be updated in the `system-config.ts` file.

```js
/** Map relative paths to URLs. */
const map: any = {
   // ...
  'ng2-pickadate': 'vendor/ng2-pickadate',
  'jquery': 'vendor/jquery',
  'pickadate': 'vendor/pickadate'
};

/** User packages configuration. */
const packages: any = {
   // ...
  'ng2-pickadate': {
    main: 'ng2-pickadate.js'
  },
  'jquery': {
    main: 'dist/jquery.js'
  },
  'pickadate': {
    format: 'global'
  }
};
```