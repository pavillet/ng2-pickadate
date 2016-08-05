import { Component, forwardRef, ElementRef, ViewChild, Input, AfterViewInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import * as $ from 'jquery';
import 'pickadate/lib/picker';
import 'pickadate/lib/picker.date';

@Component({
    selector: 'ng2-pickadate',
    template: `<input type="text" #input />`,
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Ng2Pickadate), multi: true},
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => Ng2Pickadate), multi: true}
    ]
})
export class Ng2Pickadate implements AfterViewInit, OnDestroy, ControlValueAccessor, Validator {

    @Input() public format: string = 'yyyy.mm.dd';
    @Input() public min: Pickadate.MinOrMaxDateOption;
    @Input() public max: Pickadate.MinOrMaxDateOption;

    @Output('open') public onOpen: EventEmitter<void> = new EventEmitter<void>();
    @Output('close') public onClose: EventEmitter<void> = new EventEmitter<void>();
    @Output('select') public onSelect: EventEmitter<Date> = new EventEmitter<Date>();

    @ViewChild('input') input: ElementRef;

    private onChange: any = Function.prototype;
    private onTouched: any = Function.prototype;
    private validateFn: any = (c: AbstractControl) => {};

    private date: string;
    private datepicker: Pickadate.DatePicker;

    public ngAfterViewInit(): any {
        let picker: JQuery = $(this.input.nativeElement).pickadate(this.options);
        this.datepicker = picker.pickadate('picker');

        if (this.date) {
            this.datepicker.set('select', this.date, {format: this.format});
        }

        this.datepicker.on('open', () => {
            this.onTouched();
            this.onOpen.emit(null)
        });
        this.datepicker.on('close', () => this.onClose.emit(null));

        this.datepicker.on('set', (value) => {
            this.onChange(value.select);
            this.onSelect.emit(value.select);
        });
    }

    public ngOnDestroy(): void {
        this.datepicker.off('open', 'close', 'set');
    }

    public writeValue(value: string): void {
        this.date = value;
    }

    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    public validate(c: AbstractControl): {} {
        return this.validateFn(c);
    }

    get options(): Pickadate.DateOptions {
        return {
            format: this.format,
            min: this.min,
            max: this.max
        }
    }

}
