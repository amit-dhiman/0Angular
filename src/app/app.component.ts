import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'myangularapp';
  // constructor(){
  //   console.log('----constructor----');
  // }
  @HostListener('click',['$event'])
  showsdf (){
    console.log('---hello---');
  } 


}