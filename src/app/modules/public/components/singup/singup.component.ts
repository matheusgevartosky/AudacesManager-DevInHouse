import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PublicDatahandlerService } from '../../services/public-datahandler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  hide = true;

  formSingIn: FormGroup = this.fb.group({
    nome:['',[Validators.required]],
    id:['',[Validators.required,Validators.email]],
    empresa:['',[Validators.required]],
    senha:['',[Validators.required, Validators.minLength(8)]]
  })


  constructor(private fb: FormBuilder, private _service: PublicDatahandlerService, private route: Router) { }

  ngOnInit(): void {
  }

  setNewUser(){
    this._service.createUser(this.formSingIn.value)
    .subscribe();
    this.route.navigate([''])
  }

}
