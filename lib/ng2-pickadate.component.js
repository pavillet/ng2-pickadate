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
window['picker'] = require('pickadate/lib/picker');
require('pickadate/lib/picker.date');
var PickadateComponent = (function () {
    function PickadateComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.format = 'yyyy.mm.dd';
        this.disable = [];
        this.onOpen = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.validateFn = function (c) { };
    }
    PickadateComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var picker = $(this.input.nativeElement).pickadate(this.options);
        this.datepicker = picker.pickadate('picker');
        if (this.date) {
            this.datepicker.set('select', this.date, { format: this.format });
        }
        if (this.placeholder) {
            this.input.nativeElement.placeholder = this.placeholder;
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
        $(this.input.nativeElement).change(function () {
            _this.changeDetector.markForCheck();
        });
    };
    PickadateComponent.prototype.ngOnDestroy = function () {
        this.datepicker.off('open', 'close', 'set');
    };
    PickadateComponent.prototype.writeValue = function (value) {
        this.date = value;
        console.log('called writeValue [TODO] remove');
        debugger;
    };
    PickadateComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PickadateComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PickadateComponent.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    Object.defineProperty(PickadateComponent.prototype, "options", {
        get: function () {
            return {
                disable: this.disable,
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
    ], PickadateComponent.prototype, "format", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], PickadateComponent.prototype, "formControlName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PickadateComponent.prototype, "disable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PickadateComponent.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PickadateComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PickadateComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Output('open'), 
        __metadata('design:type', core_1.EventEmitter)
    ], PickadateComponent.prototype, "onOpen", void 0);
    __decorate([
        core_1.Output('close'), 
        __metadata('design:type', core_1.EventEmitter)
    ], PickadateComponent.prototype, "onClose", void 0);
    __decorate([
        core_1.Output('select'), 
        __metadata('design:type', core_1.EventEmitter)
    ], PickadateComponent.prototype, "onSelect", void 0);
    __decorate([
        core_1.ViewChild('input'), 
        __metadata('design:type', core_1.ElementRef)
    ], PickadateComponent.prototype, "input", void 0);
    PickadateComponent = __decorate([
        core_1.Component({
            selector: 'ng2-pickadate',
            providers: [
                { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return PickadateComponent; }), multi: true },
                { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return PickadateComponent; }), multi: true }
            ],
            template: "<input type=\"text\" #input/>"
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
    ], PickadateComponent);
    return PickadateComponent;
}());
exports.PickadateComponent = PickadateComponent;
//# sourceMappingURL=ng2-pickadate.component.js.map