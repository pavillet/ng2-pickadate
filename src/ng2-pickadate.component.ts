import { Component, ElementRef, Input, OnChanges, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { NgControl, ControlValueAccessor, FormControl } from '@angular/forms';
import { MD_INPUT_DIRECTIVES } from "@angular2-material/input/input";
import * as i18n from './assets/i18n';

declare var $: any; // TODO move into typings
declare var __moduleName: any; // TODO move into typings

import 'datepicker/picker';
import 'datepicker/picker.date';

@Component({
    moduleId: __moduleName,
    selector: 'ng2-pickadate',
    templateUrl: 'ng2-pickadate.component.html',
    styleUrls: ['ng2-pickadate.component.css'],
    directives: [MD_INPUT_DIRECTIVES]
})
export class NgPickDate implements OnInit, OnChanges, ControlValueAccessor {

    @Input() minDate: Date;

    @Input() maxDate: Date;

    @Input() disabledDates: any = [];

    @Input() format: any = 'yyyy.mm.dd';

    @Input() locale: string;

    @Input() placeholder: string;

    private input: FormControl;
    public elInput: HTMLInputElement;
    private picker: any;

    private initialized: boolean = false;

    private changeFunction;

    constructor(private elMdInput: ElementRef, private ngControl: NgControl, private changeDetector: ChangeDetectorRef) {
        this.ngControl.valueAccessor = this;
    }

    ngOnInit() {
        this.setLocale();

        let options = {
            min: this.minDate,
            max: this.maxDate,
            format: this.format,
            disable: this.disabledDates
        };

        this.elInput = $(this.elMdInput.nativeElement).find('.md-input-element');

        let input = $(this.elInput).pickadate(options);
        this.picker = input.pickadate('picker');

        this.picker.set('select', this.input.value, {format: this.format});

        $(this.elInput).change(() => {
            this.changeDate();
            this.changeDetector.markForCheck();
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
        this.input.valueChanges
            .subscribe((value: any) => this.changeFunction(value))
    }

    registerOnChange(fn: any): void {
        this.changeFunction = fn;
    }

    registerOnTouched(fn: any): void {
    }

    private setLocale() {
        let optLocale = i18n.getLocale(this.locale);
        if (optLocale != null) {
            jQuery.extend(jQuery.fn.pickadate.defaults, optLocale);
        }
    }

    public changeDate(): void {
        this.picker.close();
        this.input.updateValue($(this.elInput).val(), {emitEvent: true, emitModelToViewChange: true});
    }
}