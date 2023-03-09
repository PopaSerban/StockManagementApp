import { Component, OnInit } from '@angular/core';
import { ExpressAPIService } from 'src/app/services/express-api.service';

@Component({
  selector: 'app-table-low-inventory',
  templateUrl: './table-low-inventory.component.html',
  styleUrls: ['./table-low-inventory.component.css']
})
export class TableLowInventoryComponent implements OnInit {

  public products: any[] = new Array();

  constructor(private productsService: ExpressAPIService) { 
     this.productsService.getAllProducts().subscribe({
      next: (data: any[]) => {
       this.products = data;
       console.log(this.products);
      },
      error: (error: any) => {
        console.log('problem with service');
        console.log(error);
      }
     });
  }

  ngOnInit(): void {
  }

}
