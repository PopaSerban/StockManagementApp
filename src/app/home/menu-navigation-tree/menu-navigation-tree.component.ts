import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { FlatNode, MenuNode } from './iMenuNode';


const MENU_DATA :MenuNode[] = [
    {
      name: 'Product',
      link: '/product',
      icon:'local_grocery_store',
      children: [
        {name: 'Dashboard', link: '/product/dashboard',icon:'pie_chart'},
        {name: 'Product List', link: '/product/list',icon:'list'},
        {name: 'Add Product', link: '/product/add',icon:'note_add'}
      ]
    },
    {
      name: 'Users',
      link: '/users',
      icon:'account_circle',
      children: [
        {name: 'Dashboard', link: '/users/dashboard',icon:'pie_chart'},
        {name: 'Users List', link: '/users/list',icon:'list'},
        {name: 'Add User', link: '/users/add',icon:'how_to_reg'}
      ]
    }
  ];

@Component({
  selector: 'app-menu-navigation-tree',
  templateUrl: './menu-navigation-tree.component.html',
  styleUrls: ['./menu-navigation-tree.component.css']
})
export class MenuNavigationTreeComponent implements OnInit {
  private _transformer = (node: MenuNode, level: number)=> {
    return {
      expandable: !! node.children && node.children?.length>0,
      name: node.name,
      icon: node.icon,
      link: node.link,
      level: level,
   
    }
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = MENU_DATA;
    console.log(this.dataSource)
  }
  hasChild = (_: number, node: FlatNode) => node.expandable;

  ngOnInit(): void {
  }

}
