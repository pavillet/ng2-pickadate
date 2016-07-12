// map tells the System loader where to look for things
declare var System: any;

(function (global) {
    const map: any = {
        'app': 'dist',
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular',

        'jquery': 'node_modules/jquery/dist',
        'datepicker': 'node_modules/materialize-css/js/date_picker'
    };

// packages tells the System loader how to load when no filename and/or no extension
    const packages: any = {
        'app': {main: 'main'},
        'rxjs': {defaultExtension: 'js'},
        'jquery': {
            main: 'jquery.js'
        },
        'datepicker': {defaultExtension: 'js'}
    };

    const packageNames: string[] = [
        '@angular/core',
        '@angular/common',
        '@angular/compiler',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic'
    ];

    packageNames.forEach((pkgName: string) => {
        packages[pkgName] = {
            main: 'index.js'
        };
    });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

// Apply the user's configuration.
    System.config(config);
})(this);
