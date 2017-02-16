"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var ng2Pickadate_component_1 = require("./ng2Pickadate.component");
var common_1 = require("@angular/common");
var PickadateModule = (function () {
    function PickadateModule() {
    }
    return PickadateModule;
}());
PickadateModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            material_1.MaterialModule
        ],
        declarations: [
            ng2Pickadate_component_1.PickadateComponent
        ],
        exports: [
            ng2Pickadate_component_1.PickadateComponent
        ]
    })
], PickadateModule);
exports.PickadateModule = PickadateModule;
//# sourceMappingURL=ng2Pickadate.module.js.map