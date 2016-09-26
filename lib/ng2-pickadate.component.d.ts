/// <reference types="pickadate" />
import { ElementRef, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class PickadateDirective implements AfterViewInit, OnDestroy, ControlValueAccessor {
    private el;
    format: string;
    disable: Pickadate.DateItem[];
    min: Pickadate.MinOrMaxDateOption;
    max: Pickadate.MinOrMaxDateOption;
    placeholder: string;
    _inputValue: string;
    onOpen: EventEmitter<void>;
    onClose: EventEmitter<void>;
    onSelect: EventEmitter<Date>;
    private input;
    private propagateChange;
    private date;
    private datepicker;
    constructor(el: ElementRef);
    ngAfterViewInit(): any;
    ngOnDestroy(): void;
    writeValue(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    assignValueFromHostInput(): void;
    inputValue: string;
    private assignGivenInputElement();
    private findGivenInputElement();
    readonly options: Pickadate.DateOptions;
}
