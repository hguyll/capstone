import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventSignUpComponent } from './event-sign-up/event-sign-up.component';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CreateTrialComponent } from './sports/create-trial/create-trial.component';
import { SportComponent } from './sports/sport/sport.component';
import { TrialDetailComponent } from './sports/trial-detail/trial-detail.component';

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
        path: 'sport/:sport',
        component: SportComponent
    },
    {
        path: 'viewEditEvent/:eventId',
        component: TrialDetailComponent
    },
    {
        path: 'eventSignup',
        component: EventSignUpComponent
    },
    {
        path: 'createEvent/:sport',
        component: CreateTrialComponent
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