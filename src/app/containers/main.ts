import { Component } from '@angular/core';
import { AppBar } from '../ui';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'main-container',
    directives: [ AppBar, ...ROUTER_DIRECTIVES ],
    template: `
       <div class="container-fluid">
            <app-bar></app-bar>
            <main class="main container">
                <router-outlet></router-outlet>
            </main>
        </div>
    `
})

export class Main {}
