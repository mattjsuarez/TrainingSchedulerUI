import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProblemPyramidPageComponent} from "../problem-pyramid-page/problem-pyramid-page.component";
import {SchedulePageComponent} from "../schedule-page/schedule-page.component";
import {HomePageComponent} from "../home-page/home-page.component";
import {GoalsPageComponent} from "../goals-page/goals-page.component";
import {ConfigPageComponent} from "../config-page/config-page.component";
import {ContactPageComponent} from "../contact-page/contact-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'problempyramid', component: ProblemPyramidPageComponent },
  { path: 'schedule', component: SchedulePageComponent },
  { path: 'contact', component: ContactPageComponent},
  { path: 'config', component: ConfigPageComponent},
  { path: 'goals', component: GoalsPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
