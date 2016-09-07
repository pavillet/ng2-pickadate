import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { PickadateComponent } from './ng2-pickadate.component';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        PickadateComponent
    ],
    exports: [
        PickadateComponent
    ],
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PickadateComponent), multi: true},
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => PickadateComponent), multi: true}
    ]
})
export class PickadateModule {

}
