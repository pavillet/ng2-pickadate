"use strict";
// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'ng2-pickadate': 'vendor/ng2-pickadate',
    'jquery': 'vendor/jquery',
    'pickadate': 'vendor/pickadate'
};
/** User packages configuration. */
var packages = {
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
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/counter-input',
    'app/time-input',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=tmp/broccoli_type_script_compiler-input_base_path-v9BR6Zvt.tmp/0/src/system-config.js.map