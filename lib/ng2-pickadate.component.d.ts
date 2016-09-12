/// <reference types="pickadate" />
import { ElementRef, AfterViewInit, OnDestroy, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl } from '@angular/forms';
export declare class PickadateComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {
    format: string;
    formControlName: FormControl;
    disable: Pickadate.DateItem[];
    min: Pickadate.MinOrMaxDateOption;
    max: Pickadate.MinOrMaxDateOption;
    placeholder: string;
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
