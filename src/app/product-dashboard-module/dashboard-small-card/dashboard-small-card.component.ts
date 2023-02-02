import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-small-card',
  templateUrl: './dashboard-small-card.component.html',
  styleUrls: ['./dashboard-small-card.component.css']
})
export class DashboardSmallCardComponent implements OnInit {

  @Input('title') title: string = 'Something';
  @Input('value') value: string = 'some value';
  constructor() { }

  ngOnInit(): void {
  }

}
