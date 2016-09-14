import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PickadateComponent } from './ng2-pickadate.component';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
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
