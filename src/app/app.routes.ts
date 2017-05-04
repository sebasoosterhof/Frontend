import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';


export const router: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full'  },
    { path: 'overview', component: OverviewComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
