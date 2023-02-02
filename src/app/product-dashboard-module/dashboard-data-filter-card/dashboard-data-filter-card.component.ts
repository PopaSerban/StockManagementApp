import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-data-filter-card',
  templateUrl: './dashboard-data-filter-card.component.html',
  styleUrls: ['./dashboard-data-filter-card.component.css']
})
export class DashboardDataFilterCardComponent implements OnInit {
  @Input('productTypes') productTypes: string[] =[];
  @Input('inventoryCosts') inventoryCosts: number[] =[];
  constructor() { }

  ngOnInit(): void {
  }

}
