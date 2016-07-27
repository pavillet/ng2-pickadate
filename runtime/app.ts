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

    public formControl: FormControl;

    ngOnInit() {
        this.form = new FormGroup({
            date: new FormControl('21.07.2016')
        });

        setTimeout(() => {
            let newEndDate: string = '29.07.2016';
            let fc: FormControl = (<FormControl>this.form.find('date'));

            fc.updateValue(newEndDate, {
                emitEvent: true,
                emitModelToViewChange: true
            });
        }, 2000);

        this.formControl = (<FormControl>this.form.find('date'));
    }
}
