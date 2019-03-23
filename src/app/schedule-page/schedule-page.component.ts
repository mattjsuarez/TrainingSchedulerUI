import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css']
})
export class SchedulePageComponent implements OnInit {

  cycleOrder;

  constructor(private http: Http) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.cycleOrder = this.getCycleOrder();
  }

  public getCycleOrder(): Observable<any> {
    return this.http.get("assets/data/cycle_order.json")
  }

}
