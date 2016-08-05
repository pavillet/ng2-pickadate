/// <reference types="pickadate" />
import { ElementRef, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import 'pickadate/lib/picker';
import 'pickadate/lib/picker.date';
export declare class Ng2Pickadate implements AfterViewInit, OnDestroy, ControlValueAccessor, Validator {
    format: string;
    min: Pickadate.MinOrMaxDateOption;
    max: Pickadate.MinOrMaxDateOption;
    onOpen: EventEmitter<void>;
    onClose: EventEmitter<void>;
    onSelect: EventEmitter<Date>;
    input: ElementRef;
    private onChange;
    private onTouched;
    private validateFn;
    private date;
    private datepicker;
    ngAfterViewInit(): any;
    ngOnDestroy(): void;
    writeValue(value: string): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    validate(c: AbstractControl): {};
    readonly options: Pickadate.DateOptions;
}
