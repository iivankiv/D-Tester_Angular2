import { RouterConfig } from '@angular/router';
import { Main, Auth, Statistic, Subject } from './containers';

export const routes: RouterConfig = [
    {   path: '',
        component: Auth
    },
    {
        path: 'admin',
        component: Main,
        children: [
            { path: '', component: Statistic },
            { path: 'subject', component: Subject },
        ]
    },
    { path: '**', redirectTo: ''}
];

