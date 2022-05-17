import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  formLogin: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  getErrorMessage() {
    if (this.formLogin.hasError('required')) {
      return 'You must enter a value';
    }

    return this.formLogin.hasError('email') ? 'Not a valid email' : '';
  }
  

}
