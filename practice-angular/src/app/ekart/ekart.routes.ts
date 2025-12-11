import { Routes } from "@angular/router";

export const ekartRoutes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home').then(m => m.Home),
        title: 'Home'
    }
]