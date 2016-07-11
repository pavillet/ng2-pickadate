**This is a Angular2-wrapper, to bind the jquery-pickadate.js - datepicker as an angular2-component.**

This module works with the latest release candidate of Angular 2.0.

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
                  [maxDate]="[2016,04,08]">
              </ng2-pickadate>`,
   directives: [NgPickDate]
 })
 export class MyAppComponent {
 }
 
 ```


------------
##Dependencies
    jquery: ^3.0.0
    materialize-css: "^0.97.6
    pickadate: ^3.5.6
    
Using Angular-CLI, those dependencies must be provided by systemjs!
    
```typescript

const packages: any = {
  'jquery': {
    main: 'dist/jquery.min.js'
  },
  'materialize-css': {
    main: 'dist/js/materialize.min.js'
  },
  'pickadate': {
    main: 'lib/picker.date.js'
  },
  'ng2-pickadate': {
    main: 'dist/ng2-pickadate',
    defaultExtension: 'js'
  }
};

...

const barrels: string[] = [
  'ng2-pickadate/dist',
  'pickadate', 
  'jquery', 
  'materialize-css',
  ...
];

...

System.config({
  map: {
      'ng2-pickadate': 'vendor/ng2-pickadate',
      'picker': 'vendor/pickadate/lib/picker.js',
      'picker.date': 'vendor/pickadate/lib/picker.date.js',
      'pickadate': 'vendor/pickadate',
      'jquery': 'vendor/jquery',
      'materialize-css': 'vendor/materialize-css',
      ...
       },
  packages: cliSystemConfigPackages
});
```

