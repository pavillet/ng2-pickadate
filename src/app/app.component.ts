import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private form: FormGroup;

    public disabledDate: any = [[2016,11,11]];

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            date: ''
        });
    }
}
