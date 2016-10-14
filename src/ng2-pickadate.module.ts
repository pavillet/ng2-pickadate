import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { PickadateComponent } from './ng2-pickadate.component';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule.forRoot()
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
