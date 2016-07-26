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

    public disabledDates: any = [
        {from: new Date(2016, 6, 6), to: new Date(2016, 6, 9)},
        {from: new Date(2016, 7, 9), to: new Date(2016, 7, 9)}
    ];

    ngOnInit() {
        this.form = new FormGroup({
            date: new FormControl([2016, 6, 15])
        });
    }
}
