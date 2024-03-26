import { Routes } from '@angular/router';
import { LoginAcountComponent } from './components/login-acount/login-acount.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginAcountComponent
    },
    {
        path: 'createAccount',
        component: CreateAccountComponent
    }
];
