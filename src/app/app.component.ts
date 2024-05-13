import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { Book } from './book';

class abc{
  constructor(){
    console.log('----abc------');
  }
  show(){
    console.log('---show-----');
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // preserveWhitespaces:true,
  // viewProviders:[abc,Book],
  // encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'myangularapp';
  // constructor(private _abc: abc, private _book: Book){
  //   console.log('----constructor----');
  //   _abc.show()
  // }
  // @HostListener('click',['$event'])
  // showsdf (){
  //   console.log('---hello---');
  // }
  Cdata:any;
  // getdata(val:any){
  //   this.Cdata = val
  // }

}