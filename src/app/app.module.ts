import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PickadateModule } from 'ng2-pickadate/ng2-pickadate';
window['$'] = require('jquery/dist/jquery');


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        PickadateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
