import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { ConfigPageComponent } from "./config-page/config-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";

import { GoalBannerComponent } from "./goal-banner/goal-banner.component";
import { GoalsPageComponent } from "./goals-page/goals-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ProblemPyramidPageComponent } from "./problem-pyramid-page/problem-pyramid-page.component";
import { SchedulePageComponent } from "./schedule-page/schedule-page.component";
import { TopNavBarComponent } from "./top-nav-bar/top-nav-bar.component";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigPageComponent,
    ContactPageComponent,
    GoalBannerComponent,
    GoalsPageComponent,
    HomePageComponent,
    ProblemPyramidPageComponent,
    SchedulePageComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
