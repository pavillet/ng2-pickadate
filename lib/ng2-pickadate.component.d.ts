/// <reference types="pickadate" />
import { ElementRef, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { AbstractControl, ControlValueAccessor } from '@angular/forms';
export declare class PickadateComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {
    private el;
    format: string;
    disable: Pickadate.DateItem[];
    min: Pickadate.MinOrMaxDateOption;
    max: Pickadate.MinOrMaxDateOption;
    placeholder: string;
    onOpen: EventEmitter<void>;
    onClose: EventEmitter<void>;
    onSelect: EventEmitter<Date>;
    private input;
    private onChange;
    private onTouched;
    private validateFn;
    private date;
    private datepicker;
    constructor(el: ElementRef);
    onClick(event: any): void;
    ngAfterViewInit(): any;
    ngOnDestroy(): void;
    writeValue(value: string): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    validate(c: AbstractControl): {};
    private assignGivenInputElement();
    private findGivenInputElement();
    readonly options: Pickadate.DateOptions;
}
