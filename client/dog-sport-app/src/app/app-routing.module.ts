import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ScentWorkComponent } from './sports/scent-work/scent-work.component';
import { ConformationComponent } from './sports/conformation/conformation.component';
import { DockDivingComponent } from './sports/dock-diving/dock-diving.component';
import { ObedienceComponent } from './sports/obedience/obedience.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sport/Scent Work',
        component: ScentWorkComponent
    },
    {
        path: 'sport/Conformation',
        component: ConformationComponent
    },
    {
        path: 'sport/Dock Diving',
        component: DockDivingComponent
    },
    {
        path: 'sport/Obedience',
        component: ObedienceComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }