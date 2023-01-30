import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  mode = new FormControl('over' as MatDrawerMode);
  constructor() { }

  ngOnInit(): void {
  }

  RedirectToRepository(){
    window.location.href="https://github.com/PopaSerban/StockManagementApp";
  }
}
