import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
  providers:[NumlistService]
})
export class Comp1Component {
  list1:number[]=[];

  constructor(private _numlistService: NumlistService, private _cookie:CookieService){
    this.list1= _numlistService.getlist();
    _cookie.set("ram001","sitaRam")
  }
  addnumber(val:any){
    this._numlistService.addnum(val);
    this.list1= this._numlistService.getlist();
  }
  setData(){
    localStorage.setItem("ramRam",'siaRam')
  }
}
