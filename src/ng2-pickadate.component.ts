import {
    Component, ElementRef, ViewChild, Input, AfterViewInit, OnDestroy, Output, EventEmitter,
    forwardRef, ChangeDetectorRef
} from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

declare var require: any;
window['picker'] = require('pickadate/lib/picker');
require('pickadate/lib/picker.date');

@Component({
    selector: 'ng2-pickadate',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PickadateComponent), multi: true},
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => PickadateComponent), multi: true}
    ],
    template: `<input type="text" #input/>`
})
export class PickadateComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {

    @Input() public format: string = 'yyyy.mm.dd';
    @Input() public formControlName: FormControl;
    @Input() public disable: Pickadate.DateItem[] = [];
    @Input() public min: Pickadate.MinOrMaxDateOption;
    @Input() public max: Pickadate.MinOrMaxDateOption;
    @Input() public placeholder: string;

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

        if (this.placeholder) {
            this.input.nativeElement.placeholder = this.placeholder;
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
            disable: this.disable,
            format: this.format,
            min: this.min,
            max: this.max
        }
    }

}
