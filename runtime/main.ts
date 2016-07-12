import { bootstrap } from '@angular/platform-browser-dynamic';
import { PLATFORM_DIRECTIVES } from '@angular/core';
import {
    REACTIVE_FORM_DIRECTIVES, FORM_PROVIDERS, disableDeprecatedForms, provideForms
} from '@angular/forms';

import { AppComponent } from './app';

bootstrap(AppComponent,
    [
        ...FORM_PROVIDERS,
        {provide: PLATFORM_DIRECTIVES, multi: true, useValue: [REACTIVE_FORM_DIRECTIVES]},
        disableDeprecatedForms(),
        provideForms()]);
