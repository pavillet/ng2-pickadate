import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { NgControl, ControlValueAccessor, FormControl } from '@angular/forms';
import * as i18n from './assets/i18n';

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
export class NgPickDate implements AfterViewInit, ControlValueAccessor {

    @ViewChild('dateInput')
    elDateInput: ElementRef;

    @Input() minDate: any;

    @Input() maxDate: any;

    @Input() format: any = 'yyyy.mm.dd';

    @Input() locale: string;

    private input: FormControl;
    private picker: any;

    constructor(private ngControl: NgControl) {
        this.ngControl.valueAccessor = this;
    }

    ngAfterViewInit() {
        this.setLocale();

        let options = {
            min: this.minDate,
            max: this.maxDate,
            format: this.format,
        };

        let input = $(this.elDateInput.nativeElement).pickadate(options);
        this.picker = input.pickadate('picker');

        this.selectDate(this.input.value);

        $(this.elDateInput.nativeElement).change(() => {
            this.input.updateValue($(this.elDateInput.nativeElement).val())
        });
    }

    public writeValue(date: string): void {
        this.input = new FormControl(date);
    }

    registerOnChange(fn: any): void {
        this.input.valueChanges
            .subscribe((value: any) => fn(value));
    }

    registerOnTouched(fn: any): void {
    }

    private selectDate(date: string): void {
        if (date != '' && date != null) {
            this.picker.set('select', date);
        }
    }

    private setLocale() {
        let optLocale = i18n.getLocale(this.locale);
        if (optLocale != null) {
            jQuery.extend(jQuery.fn.pickadate.defaults, optLocale);
        }
    }
}