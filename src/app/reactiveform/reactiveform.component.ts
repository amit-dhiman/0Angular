import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  
  regForm! : FormGroup;
  constructor(private _fb: FormBuilder){}
  
  ngOnInit(){
    // this.regForm = new FormGroup({
    //   id: new FormControl(),
    //   fname: new FormControl(),
    //   lname: new FormControl(),
    //   email: new FormControl(),
    //   mobileno: new FormControl(),
    // })
    // this.regForm= this._fb.group({
    //   id: new FormControl(),
    //   fname: new FormControl(),
    //   lname: new FormControl(),
    //   email: new FormControl(),
    //   mobileno: new FormControl('1234'),
    // })
    this.regForm= this._fb.group({
      id: ['',],
      fname: ['',Validators.compose([Validators.required,Validators.minLength(4)])],
      lname: ['',Validators.required],
      email: ['',Validators.compose([Validators.required,Validators.email])],
      mobileno: ['',],
    }) 
  }
  register(){
    console.log(this.regForm.value);
    console.log(this.regForm.valid);

    console.log(this.regForm.get('fname')?.value);
    console.log(this.regForm.get('email')?.value);
  }
  reset(){
    // this.regForm.reset()
    this.regForm.reset({
      fname: this.regForm.get('fname')?.value || 'ram'
    })
  }
  filldata(){
    // this.regForm.setValue({
    //   id: 1008,
    //   fname: 'ram',
    //   lname: "sham",
    //   email: "ram@ram.com",
    //   mobileno:1234
    // })
    this.regForm.patchValue({
      // id: 1008,
      fname: 'ramm',
      lname: "sham",
      email: "ram@ram.com",
      // mobileno:1234
    })
  }
}
