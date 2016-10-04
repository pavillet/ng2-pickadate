/// <reference types="pickadate" />
import { ElementRef, AfterViewInit, OnDestroy, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import './shared/picker.date';
export declare class PickadateDirective implements AfterViewInit, OnDestroy, ControlValueAccessor {
    private el;
    private cd;
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
    private datepicker;
    private pickerInitialized;
    onClick(event: any): void;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngAfterViewInit(): any;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    writeValue(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    private findInputElementInHost();
    private initializePickadateListeners();
    inputValue: string;
    readonly options: Pickadate.DateOptions;
}
