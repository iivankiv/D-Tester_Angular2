import { RouterConfig } from '@angular/router';
import { Main, Auth, Statistic, Subject } from './containers';

export const routes: RouterConfig = [
    {
        path: '',
        component: Main,
        children: [
            { path: '', component: Statistic },
            { path: 'subject', component: Subject },
        ]
    },
    { path: 'auth', component: Auth },
    { path: '**', redirectTo: ''}
];

