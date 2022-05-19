import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../interface/user';
import { PublicDatahandlerService } from '../../services/public-datahandler.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userObj: any;
  hide = true;
  errorMsg:boolean = false;


  formLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private fb: FormBuilder, private _service: PublicDatahandlerService, private route: Router) { }

  ngOnInit(): void {
  }

  UserLogin() {
    this._service.getUser(this.formLogin.value.email)
      .subscribe((data: User[]) => {
        this.userObj = data
      });
    if (this.userObj == null) {
       this.errorMsg = true;
    } else if (this.userObj.senha != this.formLogin.value.password) {
       this.errorMsg = true;
    }else{
      this.route.navigate(['/private/painel'])
      console.log('foi')

    }


  }

}
