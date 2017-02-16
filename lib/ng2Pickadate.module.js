"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var material_1 = require('@angular/material');
var ng2Pickadate_component_1 = require('./ng2Pickadate.component');
var common_1 = require("@angular/common");
var PickadateModule = (function () {
    function PickadateModule() {
    }
    PickadateModule.decorators = [
        { type: core_1.NgModule, args: [{
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
                },] },
    ];
    PickadateModule.ctorParameters = [];
    return PickadateModule;
}());
exports.PickadateModule = PickadateModule;
//# sourceMappingURL=ng2Pickadate.module.js.map