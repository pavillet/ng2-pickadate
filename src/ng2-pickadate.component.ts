import { Component, ViewChild, ElementRef, AfterViewInit, Input, OnChanges } from '@angular/core';
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
export class NgPickDate implements AfterViewInit, OnChanges, ControlValueAccessor {

    @ViewChild('dateInput')
    elDateInput: ElementRef;

    @Input() minDate: any;

    @Input() maxDate: any;

    @Input() disabledDates: any = [];

    @Input() format: any = 'yyyy.mm.dd';

    @Input() locale: string;

    @Input() placeholder: string;

    private input: FormControl;
    private picker: any;

    private initialized: boolean = false;

    constructor(private ngControl: NgControl) {
        this.ngControl.valueAccessor = this;
    }

    ngAfterViewInit() {
        (<HTMLInputElement>this.elDateInput.nativeElement).placeholder = this.placeholder;
    }

    ngOnInit() {
        this.setLocale();

        let options = {
            min: this.minDate,
            max: this.maxDate,
            format: this.format,
            disable: this.disabledDates
        };
        let input = $(this.elDateInput.nativeElement).pickadate(options);
        this.picker = input.pickadate('picker');

        this.picker.set('select', this.input.value, {format: this.format});

        $(this.elDateInput.nativeElement).change(() => {
            this.input.updateValue($(this.elDateInput.nativeElement).val())
        });
        this.initialized = true;
    }

    ngOnChanges() {
        if (!this.initialized) {
            return;
        }

        if (this.minDate != null) {
            this.picker.set('min', this.minDate);
        }

        if (this.maxDate != null) {
            this.picker.set('max', this.maxDate);
        }

        if (this.disabledDates != null) {
            this.picker.set('disabled', this.disabledDates);
        }

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

    private setLocale() {
        let optLocale = i18n.getLocale(this.locale);
        if (optLocale != null) {
            jQuery.extend(jQuery.fn.pickadate.defaults, optLocale);
        }
    }
}