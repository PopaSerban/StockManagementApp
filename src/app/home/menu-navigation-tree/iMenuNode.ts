export interface MenuNode {
    name: string;
    link: string,
    icon: string,
    children?: MenuNode[];
  }
export interface FlatNode{
    expandable: boolean;
    link: string,
    icon: string,
    name: string;
    level: number;
}

