import { Component, OnInit } from '@angular/core';
import { NgPickDate } from '../ng2-pickadate';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'test-app',
    templateUrl: 'runtime/app.component.html',
    directives: [NgPickDate]
})
export class AppComponent implements OnInit {

    private form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            date: new FormControl('[2016,18,04]')
        });
    }
}
