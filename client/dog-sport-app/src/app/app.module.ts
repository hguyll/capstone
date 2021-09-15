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
import { HttpClientModule } from '@angular/common/http';
import { TrialDetailComponent } from './sports/trial-detail/trial-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTrialComponent } from './sports/create-trial/create-trial.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SportComponent } from './sports/sport/sport.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ConformationComponent,
    DockDivingComponent,
    ObedienceComponent,
    ScentWorkComponent,
    HomeComponent,
    TrialDetailComponent,
    CreateTrialComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
