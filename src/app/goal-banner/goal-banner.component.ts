import { Component, OnInit } from '@angular/core';
import {BannerGoals} from "./banner-goals";

@Component({
  selector: 'app-goal-banner',
  templateUrl: './goal-banner.component.html',
  styleUrls: ['./goal-banner.component.css']
})
export class GoalBannerComponent implements OnInit {

  bannerGoals: BannerGoals = {
    long_term_goals: [
      "V10 Outdoor",
      "All V8 in gym in session",
      "Planche Pushup"
    ],
    medium_term_goals: [
      "All V7 in gym in session",
      "Build this website",
      "V8 Outdoor"
    ],
    short_term_goals: [
      "Make hand better",
      "All V6 in gym in session",
      "Learn how to toprope outdoors"
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
