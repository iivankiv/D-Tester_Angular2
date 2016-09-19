import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'statistic-info',
    directives: [ ...ROUTER_DIRECTIVES ],
    template: `
       <div>
            <h3>Statistic here!!!</h3>
        </div>
    `
})

export class Statistic implements OnDestroy{
    ngOnDestroy() {
        console.log('destroyed')
    }
}

