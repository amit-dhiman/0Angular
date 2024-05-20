import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',
  providers:[NumlistService]
})
export class Comp2Component {
  list1:number[]=[];

  constructor(private _cookie:CookieService, private _numlistService: NumlistService){
    this.list1= _numlistService.getlist();
    console.log('----getCookie----',this._cookie.get('ram001'));
  }
  addnumber(val:any){
    this._numlistService.addnum(val);
    this.list1= this._numlistService.getlist();
  }
  getData(){
    console.log('---userid-----',localStorage.getItem("userId"));
    console.log('---ramRam-----',localStorage.getItem("ramRam"));
  }
  deleteData(){
    // localStorage.removeItem("userId")
    localStorage.clear()
  }
}
