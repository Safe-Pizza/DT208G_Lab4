import { Routes } from '@angular/router';
import { Table } from './pages/table/table';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
    { path: "table", component: Table },
    { path: "", redirectTo: "table", pathMatch: "full" },
    { path: "**", component: PageNotFound }
];
