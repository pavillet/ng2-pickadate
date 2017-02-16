"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var pickadateTranslationLoader_1 = require('./pickadateTranslationLoader');
var _ = require('lodash');
var moment = require('moment');
window['$'] = require('jquery/dist/jquery');
window['jQuery'] = require('jquery/dist/jquery');
window['picker'] = require('./shared/picker');
require('./shared/picker.date');
var PickadateComponent = (function () {
    function PickadateComponent(changeDetector, el) {
        this.changeDetector = changeDetector;
        this.el = el;
        this.design = '';
        this.modelFormat = '';
        this.format = 'yyyy.mm.dd';
        this.locale = navigator.language;
        this.disabled = false;
        this.disabledDates = [];
        this.onOpen = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this._value = '';
        this.propagateChange = function () {
        };
        this.initialized = false;
    }
    PickadateComponent.prototype.onClick = function (event) {
        if (this.design == 'material' && !this.disabled) {
            $(this.el.nativeElement).find('.picker__holder').focus();
        }
    };
    PickadateComponent.prototype.ngAfterViewInit = function () {
        new pickadateTranslationLoader_1.TranslationHelper(this.locale).loadLanguage();
        this.input = this.findInputElement();
        var picker = $(this.input).pickadate(this.options);
        this.datepicker = picker.pickadate('picker');
        this.initialized = true;
        if (this.placeholder) {
            this.input.placeholder = this.placeholder;
        }
        if (this.value) {
            this.setDatepickerValue(this.value);
        }
        if (this.disabled) {
            this.input.disabled = true;
            this.input.readOnly = true;
        }
        this.registerListeners();
    };
    PickadateComponent.prototype.ngAfterViewChecked = function () {
        this.input.value = moment(this.value, this.format.toUpperCase()).format(this.format.toUpperCase());
    };
    PickadateComponent.prototype.ngOnChanges = function () {
        if (!this.initialized || this.disabled) {
            return;
        }
        if (!_.isNil(this.min)) {
            this.datepicker.set('min', this.min);
        }
        if (!_.isNil(this.max)) {
            this.datepicker.set('max', this.max);
        }
        if (!_.isEmpty(this.disabledDates)) {
            this.datepicker.set('_disabledDates', this.disabledDates);
        }
    };
    PickadateComponent.prototype.ngOnDestroy = function () {
        this.datepicker.off('open', 'close', 'set');
    };
    PickadateComponent.prototype.writeValue = function (value) {
        this.value = value;
        if (!this.initialized) {
            return;
        }
        this.setDatepickerValue(value);
    };
    PickadateComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    PickadateComponent.prototype.registerOnTouched = function () {
    };
    PickadateComponent.prototype.findInputElement = function () {
        if (this.design === 'material') {
            return this.inputRefMaterial._inputElement.nativeElement;
        }
        else if (this.design === '') {
            return this.inputRef.nativeElement;
        }
    };
    PickadateComponent.prototype.registerListeners = function () {
        var _this = this;
        this.datepicker.on('open', function () { return _this.onOpen.emit(null); });
        this.datepicker.on('close', function () { return _this.onClose.emit(null); });
        this.datepicker.on('set', function (value) {
            if (!_.isNil(value.select)) {
                _this.value = _this.input.value;
                _this.onSelect.emit(value);
            }
        });
    };
    Object.defineProperty(PickadateComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            var modelValue = moment(val, this.format.toUpperCase()).format(this.modelFormat ? this.modelFormat.toUpperCase() : 'x');
            this.propagateChange(modelValue);
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    PickadateComponent.prototype.setDatepickerValue = function (val) {
        if (!this.initialized) {
            return;
        }
        if (val) {
            this.datepicker.set('select', this.value, { format: this.format });
        }
        else {
            this.datepicker.clear();
        }
    };
    Object.defineProperty(PickadateComponent.prototype, "options", {
        get: function () {
            if (_.isNil(this.disabledDates)) {
                this.disabledDates = [];
            }
            return {
                disable: this.disabledDates,
                format: this.format,
                today: '',
                clear: '',
                close: ''
            };
        },
        enumerable: true,
        configurable: true
    });
    PickadateComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-pickadate',
                    template: "<md-input \n                 #inputMaterial \n                 *ngIf=\"design=='material'\" \n                 [value]=\"value\"\n                 [placeholder]=\"placeholder\"></md-input>\n               <input \n                 type=\"text\" \n                 #inputNormal \n                 *ngIf=\"design==''\"\n                 [placeholder]=\"placeholder\" />",
                    styles: ["\n        /* to use the full width of the host component */\n        input {\n            width: 100%;\n        }\n        md-input{\n            width: 100%; \n        }\n    "],
                    providers: [
                        { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return PickadateComponent; }), multi: true }
                    ]
                },] },
    ];
    PickadateComponent.ctorParameters = [
        { type: core_1.ChangeDetectorRef, },
        { type: core_1.ElementRef, },
    ];
    PickadateComponent.propDecorators = {
        'design': [{ type: core_1.Input },],
        'modelFormat': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'locale': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'disabledDates': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'onOpen': [{ type: core_1.Output, args: ['open',] },],
        'onClose': [{ type: core_1.Output, args: ['close',] },],
        'onSelect': [{ type: core_1.Output, args: ['select',] },],
        'inputRef': [{ type: core_1.ViewChild, args: ['inputNormal',] },],
        'inputRefMaterial': [{ type: core_1.ViewChild, args: ['inputMaterial',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return PickadateComponent;
}());
exports.PickadateComponent = PickadateComponent;
//# sourceMappingURL=ng2Pickadate.component.js.map