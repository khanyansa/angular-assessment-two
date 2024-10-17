import { Routes } from '@angular/router';
import { LoginSignupComponent } from './Pages/login-signup/login-signup.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'loginsignup',
        pathMatch: 'full'
    },

    {
        path: 'loginsignup',
        component: LoginSignupComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children:[
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
];


// TO DO LIST CODE



