import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
declare var $: any;
declare var __moduleName: any;

import 'pickadate/lib/picker.js';
import 'pickadate/lib/picker.date.js';

@Component({
    moduleId: __moduleName,
    selector: 'ng2-pickadate',
    templateUrl: 'ng2-pickadate.component.html',
    styleUrls: ['ng2-pickadate.component.css'],
})
export class NgPickDate implements AfterViewInit {

    @ViewChild('dateInput')
    elDateInput: ElementRef;

    @Input() minDate: any;

    @Input() maxDate: any;

    ngAfterViewInit() {
        let options = {
            min: this.minDate,
            max: this.maxDate
        };

        let input = $(this.elDateInput.nativeElement).pickadate(options);
        let picker = input.pickadate('picker');
    }
}