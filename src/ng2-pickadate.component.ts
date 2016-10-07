declare var require: any;
import {
    Directive, HostListener, ElementRef, forwardRef, Input, Output,
    AfterViewInit, OnDestroy, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

window['picker'] = require('./shared/picker');
import './shared/picker.date';

@Directive({
    selector: '[ng2Pickadate]',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PickadateDirective), multi: true}
    ]
})
export class PickadateDirective implements AfterViewInit, OnDestroy, ControlValueAccessor {

    @Input() public format: string = 'yyyy.mm.dd';
    @Input() public disable: any = {};
    @Input() public inputDisabled: boolean = false;
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

    private datepicker: Pickadate.DatePicker;
    private pickerInitialized: boolean = false;

    @HostListener('click', ['$event'])
    onClick(event) {
        event.stopPropagation();
        this.datepicker.open();
    }


    constructor(private el: ElementRef, private cd: ChangeDetectorRef) {
    }

    ngAfterViewInit(): any {
        this.input = this.findInputElementInHost();
        if (this.placeholder) {
            this.input.placeholder = this.placeholder;
        }

        let picker: JQuery = $(this.input).pickadate(this.options);
        this.datepicker = picker.pickadate('picker');

        if (this.inputValue) {
            this.input.value = this.inputValue.toString();
            this.setPickadateValue(this.inputValue.toString());
        }

        if(this.inputDisabled){
            this.input.disabled = true;
            this.input.readOnly = true;
        }
        this.initializePickadateListeners();
        this.pickerInitialized = true;
    }

    ngOnChanges() {
        if (!this.pickerInitialized) {
            return;
        }

        if(!this.inputDisabled) {
            if (this.min != null) {
                this.datepicker.set('min', this.min);
            }

            if (this.max != null) {
                this.datepicker.set('max', this.max);
            }
        }

        if (this.disable != null) {
            this.datepicker.set('disable', this.disable);
        }
    }

    ngOnDestroy(): void {
        this.datepicker.off('open', 'close', 'set');
    }

    writeValue(value: string) {
        this.inputValue = value;
        if (!this.pickerInitialized) {
            return;
        }
        if (value) {
            this.setPickadateValue(value);
        } else {
            this.datepicker.clear();
        }
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

    private findInputElementInHost(): HTMLInputElement {
        if (this.el.nativeElement.tagName === 'INPUT') {
            return this.el.nativeElement;
        } else {
            return this.el.nativeElement.getElementsByTagName('input')[0];
        }
    }

    private initializePickadateListeners() {
        this.datepicker.on('open', () => {
            this.onOpen.emit(null)
        });
        this.datepicker.on('close', () => this.onClose.emit(null));

        this.datepicker.on('set', (value) => {
            this.inputValue = (<HTMLInputElement> this.el.nativeElement).value;
            this.onSelect.emit(value);
        });
    }

    get inputValue() {
        return this._inputValue;
    }

    set inputValue(val: string) {
        this._inputValue = val;
        if (this.input != null) {
            this.input.value = val;
        }
        //noinspection TypeScriptValidateTypes
        this.propagateChange(val);
        this.cd.markForCheck();
    }

    private setPickadateValue(val: string) {
        this.datepicker.set('select', val, {format: this.format});
    }

    get options(): Pickadate.DateOptions {
        return {
            disable: this.disable,
            format: this.format
        }
    }
}
