import { Routes } from '@angular/router';
import { LoginAccountComponent } from './components/login-account/login-account.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginAccountComponent
    },
    {
        path: 'createAccount',
        component: CreateAccountComponent
    }
];
