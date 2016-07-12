import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
declare var $: any; // TODO move into typings
declare var __moduleName: any; // TODO move into typings

import 'datepicker/picker';
import 'datepicker/picker.date';

@Component({
    moduleId: __moduleName,
    selector: 'ng2-pickadate',
    templateUrl: 'ng2-pickadate.component.html',
    styleUrls: ['ng2-pickadate.component.css']
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