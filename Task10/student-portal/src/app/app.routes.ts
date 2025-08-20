import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';


export const routes: Routes = [
{
path: '',
component: MainLayoutComponent,
children: [
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{
path: 'home',
loadComponent: () =>
import('./pages/home/home.component').then(m => m.HomeComponent),
},
{
path: 'about',
loadComponent: () =>
import('./pages/about/about.component').then(m => m.AboutComponent),
},
{
path: 'students',
loadChildren: () =>
import('./features/students/students.routes').then(
m => m.STUDENTS_ROUTES
),
},
],
},
{
path: '**',
loadComponent: () =>
import('./pages/not-found/not-found.component').then(
m => m.NotFoundComponent
),
},
];