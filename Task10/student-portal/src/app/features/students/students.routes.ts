import { Routes } from '@angular/router';


export const STUDENTS_ROUTES: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'list' },
{
path: 'list',
loadComponent: () =>
import('./components/students-list/students-list.component').then(
m => m.StudentsListComponent
),
},
{
path: 'details/:id',
loadComponent: () =>
import('./components/student-details/student-details.component').then(
m => m.StudentDetailsComponent
),
},
];