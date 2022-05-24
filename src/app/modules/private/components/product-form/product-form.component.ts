import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public formProduto: FormGroup = this._form.group({
    name:['',[Validators.required]],
    responsavel:['',[Validators.required]],
    modelo:['',[Validators.required]],
    colecao:['',[Validators.required]],
    bordado:['',[Validators.required]],
    estampa:['',[Validators.required]]
  })


  constructor(private _form: FormBuilder) { }

  ngOnInit(): void {
  }

}
