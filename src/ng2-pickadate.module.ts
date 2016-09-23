import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PickadateDirective } from './ng2-pickadate.component';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        PickadateDirective
    ],
    exports: [
        PickadateDirective
    ]
})
export class PickadateModule {

}
