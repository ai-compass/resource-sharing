export interface Item {
  name: string;
  link: string;
}

export interface List {
  [key: string]: Item[];
}
