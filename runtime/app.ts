import {Component} from '@angular/core';
import {NgPickDate} from '../index';


@Component({
    selector: 'test-app',
    template: '<ng2-pickadate>Test</ng2-pickadate>',
    directives: [NgPickDate]
})
export class AppComponent {
    constructor() {
    }
}
