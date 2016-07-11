import {Component} from '@angular/core';
import {NgPickDate} from '../ng2-pickadate';


@Component({
    selector: 'test-app',
    template: '<ng2-pickadate [minDate]="[2016,06,10]" [maxDate]="[2016,08,08]"></ng2-pickadate>',
    directives: [NgPickDate]
})
export class AppComponent {
    constructor() {
    }
}
