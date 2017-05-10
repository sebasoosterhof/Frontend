import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { LoginComponent} from './login/login.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'  },
    { path: 'login', component: LoginComponent },
    { path: 'overzicht', component: OverviewComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
