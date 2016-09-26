import {
    Directive, ElementRef, forwardRef, Input, Output, AfterViewInit,
    OnDestroy, EventEmitter
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var require: any;
window['picker'] = require('./shared/picker');
require('./shared/picker.date');

@Directive({
    selector: '[ng2Pickadate]',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PickadateDirective), multi: true}
    ]
})
export class PickadateDirective implements AfterViewInit, OnDestroy, ControlValueAccessor {

    @Input() public format: string = 'yyyy.mm.dd';
    @Input() public disable: Pickadate.DateItem[] = [];
    @Input() public min: Pickadate.MinOrMaxDateOption;
    @Input() public max: Pickadate.MinOrMaxDateOption;
    @Input() public placeholder: string;
    @Input('ng2Pickadate') _inputValue: string = '';

    @Output('open') public onOpen: EventEmitter<void> = new EventEmitter<void>();
    @Output('close') public onClose: EventEmitter<void> = new EventEmitter<void>();
    @Output('select') public onSelect: EventEmitter<Date> = new EventEmitter<Date>();

    private input: HTMLInputElement;

    private propagateChange: any = () => {
    };

    private date: string;
    private datepicker: Pickadate.DatePicker;

    constructor(private el: ElementRef) {
    }

    public ngAfterViewInit(): any {
        this.assignGivenInputElement();
        this.input.value = this.inputValue.toString();

        let picker: JQuery = $(this.input).pickadate(this.options);
        this.datepicker = picker.pickadate('picker');

        if (this.date) {
            this.datepicker.set('select', this.date, {format: this.format});
        }

        if (this.placeholder) {
            this.el.nativeElement.placeholder = this.placeholder;
        }

        this.datepicker.on('open', () => {
            this.onOpen.emit(null)
        });
        this.datepicker.on('close', () => this.onClose.emit(null));

        this.datepicker.on('set', (value) => {
            this.inputValue = value.select;
            this.assignValueFromHostInput();
            this.onSelect.emit(value.select);
        });
    }

    public ngOnDestroy(): void {
        this.datepicker.off('open', 'close', 'set');
    }

    writeValue(value: string) {
        if (value) {
            this.inputValue = value;
        }
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

    assignValueFromHostInput() {
        let inputVal: string = (<HTMLInputElement> this.el.nativeElement).value;
        this.inputValue = inputVal;
        (<HTMLInputElement> this.el.nativeElement).value = inputVal;
    }

    get inputValue() {
        return this._inputValue;
    }

    set inputValue(val: string) {
        this._inputValue = val;
        this.propagateChange(val);
    }

    private assignGivenInputElement(): void {
        if (this.el.nativeElement.tagName === 'INPUT') {
            this.input = this.el.nativeElement;
        } else {
            this.input = this.findGivenInputElement();
        }
    }

    private findGivenInputElement(): HTMLInputElement {
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
