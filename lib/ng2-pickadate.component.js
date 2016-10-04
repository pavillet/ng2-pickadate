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
window['picker'] = require('./shared/picker');
require('./shared/picker.date');
var PickadateDirective = (function () {
    function PickadateDirective(el, cd) {
        this.el = el;
        this.cd = cd;
        this.format = 'yyyy.mm.dd';
        this.disable = [];
        this._inputValue = '';
        this.onOpen = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.propagateChange = function () {
        };
        this.pickerInitialized = false;
    }
    PickadateDirective.prototype.onClick = function (event) {
        event.stopPropagation();
        this.datepicker.open();
    };
    PickadateDirective.prototype.ngAfterViewInit = function () {
        this.input = this.findInputElementInHost();
        if (this.placeholder) {
            this.input.placeholder = this.placeholder;
        }
        var picker = $(this.input).pickadate(this.options);
        this.datepicker = picker.pickadate('picker');
        if (this.inputValue) {
            this.input.value = this.inputValue.toString();
            this.datepicker.set('select', this.inputValue.toString(), { format: this.format });
        }
        this.initializePickadateListeners();
        this.pickerInitialized = true;
    };
    PickadateDirective.prototype.ngOnChanges = function () {
        if (!this.pickerInitialized) {
            return;
        }
        if (this.min != null) {
            this.datepicker.set('min', this.min);
        }
        if (this.max != null) {
            this.datepicker.set('max', this.max);
        }
        if (this.disable != null) {
            this.datepicker.set('disabled', this.disable);
        }
    };
    PickadateDirective.prototype.ngOnDestroy = function () {
        this.datepicker.off('open', 'close', 'set');
    };
    PickadateDirective.prototype.writeValue = function (value) {
        if (!this.pickerInitialized) {
            this.inputValue = value;
            return;
        }
        if (value) {
            this.datepicker.set('select', value, { format: this.format });
        }
        else {
            this.datepicker.clear();
        }
    };
    PickadateDirective.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    PickadateDirective.prototype.registerOnTouched = function () {
    };
    PickadateDirective.prototype.findInputElementInHost = function () {
        if (this.el.nativeElement.tagName === 'INPUT') {
            return this.el.nativeElement;
        }
        else {
            return this.el.nativeElement.getElementsByTagName('input')[0];
        }
    };
    PickadateDirective.prototype.initializePickadateListeners = function () {
        var _this = this;
        this.datepicker.on('open', function () {
            _this.onOpen.emit(null);
        });
        this.datepicker.on('close', function () { return _this.onClose.emit(null); });
        this.datepicker.on('set', function (value) {
            _this.inputValue = _this.el.nativeElement.value;
            _this.onSelect.emit(value);
        });
    };
    Object.defineProperty(PickadateDirective.prototype, "inputValue", {
        get: function () {
            return this._inputValue;
        },
        set: function (val) {
            this._inputValue = val;
            if (this.input != null) {
                this.input.value = val;
            }
            this.propagateChange(val);
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PickadateDirective.prototype, "options", {
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
    ], PickadateDirective.prototype, "format", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PickadateDirective.prototype, "disable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PickadateDirective.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PickadateDirective.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PickadateDirective.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input('ng2Pickadate'), 
        __metadata('design:type', String)
    ], PickadateDirective.prototype, "_inputValue", void 0);
    __decorate([
        core_1.Output('open'), 
        __metadata('design:type', core_1.EventEmitter)
    ], PickadateDirective.prototype, "onOpen", void 0);
    __decorate([
        core_1.Output('close'), 
        __metadata('design:type', core_1.EventEmitter)
    ], PickadateDirective.prototype, "onClose", void 0);
    __decorate([
        core_1.Output('select'), 
        __metadata('design:type', core_1.EventEmitter)
    ], PickadateDirective.prototype, "onSelect", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], PickadateDirective.prototype, "onClick", null);
    PickadateDirective = __decorate([
        core_1.Directive({
            selector: '[ng2Pickadate]',
            providers: [
                { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return PickadateDirective; }), multi: true }
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef])
    ], PickadateDirective);
    return PickadateDirective;
}());
exports.PickadateDirective = PickadateDirective;
//# sourceMappingURL=ng2-pickadate.component.js.map