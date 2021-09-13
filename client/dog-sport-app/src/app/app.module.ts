import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ConformationComponent } from './sports/conformation/conformation.component';
import { DockDivingComponent } from './sports/dock-diving/dock-diving.component';
import { ObedienceComponent } from './sports/obedience/obedience.component';
import { ScentWorkComponent } from './sports/scent-work/scent-work.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ConformationComponent,
    DockDivingComponent,
    ObedienceComponent,
    ScentWorkComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
