import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./default/default').then(m => m.Default),
        title: 'Default Page'
    },
    {
        path: 'default',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./not-found-page/not-found-page').then(m => m.NotFoundPage)
    },
    {
        path:'ekart/home',
        loadComponent: () => import('./ekart/home/home').then(c => c.Home),
        title: 'Home'
    }
];
