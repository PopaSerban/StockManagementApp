import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  productTypes = ['Toys', 'Home', 'Electronics', 'Clothing'];

  inventoryCosts:number[] = [0.04,0.10,1.00,1.50];


  updateData(productType: string, costPerMonth: number) {
    // Update the data for Tile 3 based on the selected filters
  }
  constructor() {}

  ngOnInit(): void {
  }

}
