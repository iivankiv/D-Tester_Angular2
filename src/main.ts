import { bootstrap } from '@angular/platform-browser-dynamic';
import { App, routes } from './app';
import { provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

bootstrap(App, [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy}
]);