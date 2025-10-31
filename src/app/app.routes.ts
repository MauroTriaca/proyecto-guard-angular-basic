import { Routes } from '@angular/router';
import { PageLogin } from './pages/page-login/page-login';
import { HomePage } from './pages/home-page/home-page';
import { AccessDenied } from './auth/pages/access-denied/access-denied';
import { AdminPage } from './pages/admin-page/admin-page';
import { AccessDeniedLogin } from './auth/pages/access-denied-login/access-denied-login';

export const routes: Routes = [
    {path:'home', component: HomePage},
    {path:'login', component: PageLogin},
    {path:'access-denied', component: AccessDenied},
    {path:'access-denied-login', component: AccessDeniedLogin},
    {path:'admin', component: AdminPage},
    {path:'**', redirectTo:'home', pathMatch:'full'}
];
