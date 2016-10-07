# ng2-pickadate

An Angular2 component for pickadate.js. 
See the [changelog](./CHANGELOG.md) for more information.


### Demo
* Demo can be found at [https://cschroeter.github.io/ng2-pickadate/](https://cschroeter.github.io/ng2-pickadate/) 


### Usage

 ```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<input type="text" [min]="minDate" (select)="onSelect($event)" ng2-pickadate>`
})
export class AppComponent {
    public minDate: Date = new Date();

    public onSelect(timestamp): void {
        console.log(timestamp)
    }
}
 
 ```
 Remind binding components and modules with NgModule (explained in [Angular CLI Configuration](./docs/angular-cli.md))


### Requirements

* [Angular2](https://angular.io/)
* [pickadate](http://amsul.ca/pickadate.js/)
* [JQuery](http://jquery.com/)


### Installation

* [Bind ng2-Pickadate to Angular](./docs/angular-cli.md)


### Themes

Themes will be supported later on. For the moment you can use the default css styles provided by pickadate.js:

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/themes/default.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/pickadate.js/3.5.6/compressed/themes/default.date.css" rel="stylesheet">
```

There is also a nice way to bind the theme from the peer-dependency pickadate.js using sass:

```sass
@import "~pickadate/lib/compressed/themes/classic";
@import "~pickadate/lib/compressed/themes/classic.date";
```