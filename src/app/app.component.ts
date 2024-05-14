import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { Book } from './book';
import { CommonModule } from '@angular/common';

class abc {
  constructor() {
    console.log('----abc------');
  }
  show() {
    console.log('---show-----');
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // preserveWhitespaces:true,
  // viewProviders:[abc,Book],
  // encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'myangularapp';
  //Send data Child to Parent
  // constructor(private _abc: abc, private _book: Book){
  //   console.log('----constructor----');
  //   _abc.show()
  // }
  // @HostListener('click',['$event'])
  // showsdf (){
  //   console.log('---hello---');
  // }
  Cdata: any;
  isLoggedIn: boolean = false;
  isValid: boolean = true;
  num1 = 200;
  num2 = 100;
  name = 'Mohan';
  myCountry = 'bharat';
  city='noida';
  fontsize=60;
  col=2;

  employees: any[] = [
    { id: 1, name: 'Ram1', country: 'india' },
    { id: 2, name: 'Ram2', country: 'bharat' },
    { id: 3, name: 'Ram3', country: 'usa' },
    { id: 4, name: 'Ram4', country: 'china' },
    { id: 5, name: 'Ram5', country: 'japan' },
    { id: 6, name: 'Ram6', country: 'poland' },
  ]

  company={
    name: "Sahosoft",
    city: "Noida",
    state: null,
    country: "India",
  }
  // company:any;


  // send data Child to Parent
  // we can do this without using getdata function, just put this Cdata variable in component.html
  // getdata(val:any){
  //   this.Cdata = val
  // }

  // Conditions

  login() {
    this.isLoggedIn = true
  }
  logout() {
    this.isLoggedIn = false
  }
  onChange(val: any) {
    console.log('-----val-----', val);
    this.isValid = val
  }
  getColor(country: any) {
    // debugger;
    switch (country) {
      case "india":
        return 'violet';
      case "bharat":
        return 'red';
      case "usa":
        return 'green';
      case "china":
        return 'red';      
      case "japan":
        return 'orange';
    }
    return null;
  }
  changeCity(){
    this.city =  'new delhi'
  }
  

}
