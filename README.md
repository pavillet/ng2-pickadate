**This is a Angular2-wrapper, to bind the jquery-pickadate.js - datepicker as an angular2-component.**

This module works with the latest release candidate of Angular 2.0. The default styling is the Material-Design from materialize-css.

------------
##Installation
 
 ```bash
 npm install --save ng2-pickadate
 ```

------------
##Usage

 ```typescript
 import { NgPickDate } from 'ng2-pickadate/ng2-pickadate';
 
 @Component({
   selector: 'my-app',
   template: `<ng2-pickadate
                  [minDate]="[2016,06,10]"
                  [maxDate]="[2016,08,08]">
              </ng2-pickadate>`,
   directives: [NgPickDate]
 })
 export class MyAppComponent {
 }
 
 ```


------------
##Dependencies
    jquery
    materialize-css
    
Using Angular-CLI, those dependencies must be provided by systemjs!

system.config.ts:
```typescript

const packages: any = {
  'jquery': {
    main: 'dist/jquery.min.js'
  },
  'ng2-pickadate': {
    main: 'dist/ng2-pickadate',
    defaultExtension: 'js'
  },
  'datepicker': {
    defaultExtension: 'js'
  }
};

...

const barrels: string[] = [
  'ng2-pickadate/dist',
  'materialize-css',
  'jquery',
  ...
];

...

System.config({
  map: {
      'ng2-pickadate': 'vendor/ng2-pickadate',
      'jquery': 'vendor/jquery',
      'datepicker': 'vendor/materialize-css/js/date_picker'
      ...
       },
  packages: cliSystemConfigPackages
});
```

angular-cli-build.js
```typescript
    vendorNpmFiles: [
      'ng2-pickadate/**/*.+(js|css|html)',
      'materialize-css/js/date_picker/**/*.js',
      'jquery/**/*.js',
      ...
    ]
```