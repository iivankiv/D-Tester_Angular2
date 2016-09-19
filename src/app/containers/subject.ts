import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'subject-container',
    directives: [ ...ROUTER_DIRECTIVES ],
    template: `
       <div>
            <h3>Subjects here!!!</h3>
        </div>
    `
})

export class Subject {}

