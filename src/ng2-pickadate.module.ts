import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { PickadateComponent } from './ng2-pickadate.component';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        PickadateComponent
    ],
    exports: [
        PickadateComponent
    ]
})
export class PickadateModule {

}
