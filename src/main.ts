import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { App, routes, providers } from './app';
import { provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

bootstrap(App, [
    ...HTTP_PROVIDERS,
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    ...providers
]);