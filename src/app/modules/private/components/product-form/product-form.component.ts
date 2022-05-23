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
    estacao:['',[Validators.required]] ,
    orcamento:[0,[Validators.required]],
    responsavel:['',[Validators.required]],
    marca:['',[Validators.required]],
    anoLancamento:['',[Validators.required]]
  })


  constructor(private _form: FormBuilder) { }

  ngOnInit(): void {
  }

}
