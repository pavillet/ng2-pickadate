import { Component, ElementRef, Input, OnChanges, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { NgControl, ControlValueAccessor, FormControl } from '@angular/forms';
import { MD_INPUT_DIRECTIVES } from "@angular2-material/input/input";
import * as i18n from './assets/i18n';
import moment from 'moment';

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

    @Input() disabled: boolean;

    @Input() disabledDates: any = [];

    @Input() format: any = 'yyyy.mm.dd';

    @Input() locale: string;

    @Input() placeholder: string;

    @Input() description: string;

    private input: FormControl;
    public inputElement: HTMLInputElement;
    private picker: any;

    private initialized: boolean = false;

    private changeFunction;

    constructor(private elementRef: ElementRef,
                private ngControl: NgControl,
                private changeDetector: ChangeDetectorRef) {
        this.ngControl.valueAccessor = this;
    }

    ngOnInit() {
        this.setLocale();

        let options = {
            min: this.minDate,
            max: this.maxDate,
            format: this.format,
            disable: this.disabledDates,
            onRender: () => {
                this.highlightDisabledDates();
            }
        };

        this.inputElement = $(this.elementRef.nativeElement).find('.inp-input-element');

        let input = $(this.inputElement).pickadate(options);
        this.picker = input.pickadate('picker');

        this.picker.set('select', this.input.value, {format: this.format});

        $(this.inputElement).change(() => {
            this.changeDate();
            this.changeDetector.markForCheck();
        });
        this.initialized = true;

        $('.picker__calendar-container').attr('data-content', this.description);
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

        if (this.description != null) {
            $('.picker__calendar-container').attr('data-content', this.description);
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
        this.input.updateValue($(this.inputElement).val(), {emitEvent: true, emitModelToViewChange: true});
    }

    public highlightDisabledDates(): void {
        if (this.picker == null) {
            return;
        }

        for (let i = 0; i < this.disabledDates.length; i++) {
            let dateRange: {from: Date, to: Date} = this.disabledDates[i];
            for (let dayToHighlight = new Date(dateRange.from.getTime()); dayToHighlight <= dateRange.to; dayToHighlight.setDate(dayToHighlight.getDate() + 1)) {
                let dateStr = moment(dayToHighlight).format(this.format.toUpperCase());
                $('.datepicker').find('[aria-label="' + dateStr + '"]').addClass('disabled-date-range-item');
            }
        }
    }
}