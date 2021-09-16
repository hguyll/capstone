import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventSignUpComponent } from './event-sign-up/event-sign-up.component';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'eventSignup',
        component: EventSignUpComponent
    },
    {
        path: 'addNew',
        component: EventSignUpComponent
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }