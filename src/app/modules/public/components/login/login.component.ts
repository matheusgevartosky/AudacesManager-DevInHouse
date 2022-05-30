import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private _service: PublicDatahandlerService, private route: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  UserLogin() {
    this._service.getUser(this.formLogin.value.email)
      .subscribe((data: User[]) => {
        this.userObj = data
    if (this.userObj == null) {
       this.errorMsg = true;
       this.openSnackBar("Usuário inexistente")
    } else if (this.userObj.senha != this.formLogin.value.password) {
       this.errorMsg = true;
       this.openSnackBar("Senha inválida")
    }else{
      this.openSnackBar("Seja bem vindo!")
      this.route.navigate(['/main/'])
    }
  });

  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg,'', {
      duration: 3000
    })
  }

}
