declare var require: any;
import {
    Component, HostListener, ElementRef, ViewChild, forwardRef, Input, Output,
    AfterViewInit, OnDestroy, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MdInput } from '@angular/material';
import { PickadateTranslationLoader } from './pickadateTranslationLoader';

window['$'] = require('jquery/dist/jquery');
window['jQuery'] = require('jquery/dist/jquery');
window['picker'] = require('./shared/picker');
import './shared/picker.date';

@Component({
    selector: 'ng2-pickadate',
    template: `<md-input 
                 #inputMaterial 
                 *ngIf="design=='material'" 
                 [value]="inputValue"
                 [placeholder]="placeholder"></md-input>
               <input 
                 type="text" 
                 #inputNormal 
                 *ngIf="design==''"
                 [placeholder]="placeholder" />`,
    styles: [`
        :host {
            display: block;
        }
        input {
            width: 100%;
        }
        md-input{
            width: 100%;
        }
    `],
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PickadateComponent), multi: true}
    ]
})
export class PickadateComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {

    @Input() public design: string = '';
    @Input() public format: string = 'yyyy.mm.dd';
    @Input() public browserLang: string = '';
    @Input() public disable: any = {};
    @Input() public inputDisabled: boolean = false;
    @Input() public min: Pickadate.MinOrMaxDateOption;
    @Input() public max: Pickadate.MinOrMaxDateOption;
    @Input() public placeholder: string;

    @Output('open') public onOpen: EventEmitter<void> = new EventEmitter<void>();
    @Output('close') public onClose: EventEmitter<void> = new EventEmitter<void>();
    @Output('select') public onSelect: EventEmitter<Date> = new EventEmitter<Date>();

    @ViewChild('inputNormal') inputRef: ElementRef;
    @ViewChild('inputMaterial') inputRefMaterial: MdInput;
    private input: HTMLInputElement;
    private _inputValue: string = '';

    private propagateChange: any = () => {
    };

    private datepicker: Pickadate.DatePicker;
    private pickerInitialized: boolean = false;

    constructor(private cd: ChangeDetectorRef, private el: ElementRef) {
    }

    @HostListener('click', ['$event'])
    onClick(event) {
        if (this.design == 'material'  && !this.inputDisabled) {
            $(this.el.nativeElement).find('.picker__holder').focus();
        }
    }


    ngAfterViewInit(): any {
        new PickadateTranslationLoader(this.browserLang);

        this.input = this.findInputElementInChild();
        if (this.placeholder) {
            this.input.placeholder = this.placeholder;
        }

        let picker: JQuery = $(this.input).pickadate(this.options);
        this.datepicker = picker.pickadate('picker');

        if (this.inputValue) {
            this.input.value = this.inputValue;
            this.setPickadateValue(this.inputValue);
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

        if (this.disable != null && this.disable !== {} ) {
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

    private findInputElementInChild(): HTMLInputElement {
        if(this.design === 'material') {
            return this.inputRefMaterial._inputElement.nativeElement;
        }
        else {
            return this.inputRef.nativeElement;
        }
    }

    private initializePickadateListeners() {
        this.datepicker.on('open', () => {
            this.onOpen.emit(null)
        });
        this.datepicker.on('close', () => this.onClose.emit(null));

        this.datepicker.on('set', (value) => {
            if(value.select != null) { // the set event is fired for every set, but we should listen only to set->select
                this.inputValue = this.input.value;
                this.onSelect.emit(value);
            }
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
            format: this.format,
            today: '',
            clear: '',
            close: ''
        }
    }
}
