"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var $ = require('jquery');
require('pickadate/lib/picker');
require('pickadate/lib/picker.date');
var Ng2Pickadate = (function () {
    function Ng2Pickadate() {
        this.format = 'yyyy.mm.dd';
        this.onOpen = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.validateFn = function (c) { };
    }
    Ng2Pickadate.prototype.ngAfterViewInit = function () {
        var _this = this;
        var picker = $(this.input.nativeElement).pickadate(this.options);
        this.datepicker = picker.pickadate('picker');
        if (this.date) {
            this.datepicker.set('select', this.date, { format: this.format });
        }
        this.datepicker.on('open', function () {
            _this.onTouched();
            _this.onOpen.emit(null);
        });
        this.datepicker.on('close', function () { return _this.onClose.emit(null); });
        this.datepicker.on('set', function (value) {
            _this.onChange(value.select);
            _this.onSelect.emit(value.select);
        });
    };
    Ng2Pickadate.prototype.ngOnDestroy = function () {
        this.datepicker.off('open', 'close', 'set');
    };
    Ng2Pickadate.prototype.writeValue = function (value) {
        this.date = value;
    };
    Ng2Pickadate.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    Ng2Pickadate.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    Ng2Pickadate.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    Object.defineProperty(Ng2Pickadate.prototype, "options", {
        get: function () {
            return {
                format: this.format,
                min: this.min,
                max: this.max
            };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Ng2Pickadate.prototype, "format", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2Pickadate.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2Pickadate.prototype, "max", void 0);
    __decorate([
        core_1.Output('open'), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2Pickadate.prototype, "onOpen", void 0);
    __decorate([
        core_1.Output('close'), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2Pickadate.prototype, "onClose", void 0);
    __decorate([
        core_1.Output('select'), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2Pickadate.prototype, "onSelect", void 0);
    __decorate([
        core_1.ViewChild('input'), 
        __metadata('design:type', core_1.ElementRef)
    ], Ng2Pickadate.prototype, "input", void 0);
    Ng2Pickadate = __decorate([
        core_1.Component({
            selector: 'ng2-pickadate',
            template: "<input type=\"text\" #input />",
            providers: [
                { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return Ng2Pickadate; }), multi: true },
                { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return Ng2Pickadate; }), multi: true }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2Pickadate);
    return Ng2Pickadate;
}());
exports.Ng2Pickadate = Ng2Pickadate;
//# sourceMappingURL=ng2-pickadate.js.map