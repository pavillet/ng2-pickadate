import {
    ElementRef, Input, AfterViewInit, OnDestroy, Output, EventEmitter,
    forwardRef, Directive, HostListener
} from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS } from '@angular/forms';

declare var require: any;
window['picker'] = require('pickadate/lib/picker');
require('pickadate/lib/picker.date');

@Directive({
    selector: '[ng2-pickadate]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => PickadateComponent), multi: true}
    ]
})
export class PickadateComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {

    @Input() public format: string = 'yyyy.mm.dd';
    @Input() public disable: Pickadate.DateItem[] = [];
    @Input() public min: Pickadate.MinOrMaxDateOption;
    @Input() public max: Pickadate.MinOrMaxDateOption;
    @Input() public placeholder: string;

    @Output('open') public onOpen: EventEmitter<void> = new EventEmitter<void>();
    @Output('close') public onClose: EventEmitter<void> = new EventEmitter<void>();
    @Output('select') public onSelect: EventEmitter<Date> = new EventEmitter<Date>();

    private input: HTMLElement;

    private onChange: any = Function.prototype;
    private onTouched: any = Function.prototype;
    private validateFn: any = (c: AbstractControl) => {};

    private date: string;
    private datepicker: Pickadate.DatePicker;

    constructor(private el: ElementRef) {
    }

    @HostListener('click', ['$event'])
    public onClick(event) {
        event.stopPropagation();
        this.datepicker.open();
    }

    public ngAfterViewInit(): any {
        this.assignGivenInputElement();
        let picker: JQuery = $(this.el.nativeElement).pickadate(this.options);
        this.datepicker = picker.pickadate('picker');

        if (this.date) {
            this.datepicker.set('select', this.date, {format: this.format});
        }

        if (this.placeholder) {
            this.el.nativeElement.placeholder = this.placeholder;
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

    private assignGivenInputElement(): void {
        if (this.el.nativeElement.tagName === 'INPUT') {
            this.input = this.el.nativeElement;
        } else {
            this.input = this.findGivenInputElement();
        }
    }

    private findGivenInputElement(): HTMLElement {
        return this.el.nativeElement.getElementsByTagName('input')[0];
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
