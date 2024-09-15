export interface Item {
  name: string;
  link: string;
  color?: string;
}

export interface List {
  [key: string]: Item[];
}
