import { Injectable } from '@angular/core';

@Injectable(
  // {providedIn: 'root'}
)
export class NumlistService {

  list:number[]=[100];

  constructor() { }

  addnum(num:number){
    this.list.push(num);
    console.log('------this.list-----',this.list);
  }
  getlist(){
    return this.list;
  }

}
