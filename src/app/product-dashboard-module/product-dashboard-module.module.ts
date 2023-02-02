import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { ProductDashboardModuleRoutingModule } from './product-dashboard-module-routing.module';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { AngularMaterialModule } from '../material.module';
import { DashboardStatisticsComponent } from './dashboard-statistics/dashboard-statistics.component';
import { DashboardSmallCardComponent } from './dashboard-small-card/dashboard-small-card.component';
import { DashboardLowInventoryCardComponent } from './dashboard-low-inventory-card/dashboard-low-inventory-card.component';
import { DashboardDataFilterCardComponent } from './dashboard-data-filter-card/dashboard-data-filter-card.component';
import { TableLowInventoryComponent } from './dashboard-low-inventory-card/table-low-inventory/table-low-inventory.component';


@NgModule({
  declarations: [
    ProductDashboardComponent,
    DashboardStatisticsComponent,
    DashboardSmallCardComponent,
    DashboardLowInventoryCardComponent,
    DashboardDataFilterCardComponent,
    TableLowInventoryComponent,

  ],
  imports: [
    RouterModule,
    CommonModule,
    AngularMaterialModule,
    ProductDashboardModuleRoutingModule
  ]
})
export class ProductDashboardModuleModule { }
