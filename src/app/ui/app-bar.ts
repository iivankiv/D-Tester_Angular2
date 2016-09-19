import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'app-bar',
    directives: [ ...ROUTER_DIRECTIVES ],
    styles: [`
        .app-bar {
            height: 65px;
            padding: 5px 30px;
            background-color: #00BCD4;
        }
        .logo {
            color: white;
            font-size: 30px;
            font-weight: 300;
            cursor: pointer;
        }
        .link {
            color: white;
            font-size: 24px;
            font-weight: 400px;
            cursor: pointer;
        }
    `],
    template: `
        <header class="app-bar row middle-xs">
            <span [routerLink]="['']" class="logo col-xs-10">
                D-Tester
            </span>
            <nav class="col-xs-2">
                <div class="row middle-xs between-xs">
                    <span [routerLink]="['', 'subject']" class="link">Subject</span>
                    <span class="link">signout</span>
                </div>
            </nav>
        </header>
    `
})
export class AppBar {}
