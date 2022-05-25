import { CollectServService } from './../../services/collect-serv.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Collection } from '../../interfaces/collection';
import { ProdServService } from '../../services/prod-serv.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public AllCollections: Collection[] = []

  public formProduto: FormGroup = this._form.group({
    name:['',[Validators.required]],
    responsavel:['',[Validators.required]],
    modelo:['',[Validators.required]],
    colecao:['',[Validators.required]],
    bordado:[false,[Validators.required]],
    estampa:[false,[Validators.required]]
  })


  constructor(private _form: FormBuilder, private _collection: CollectServService, private _service: ProdServService) { }

  ngOnInit(): void {
    this.getCollection()
  }

public createProd(){
  if(this.formProduto.valid){
    this._service.createProducts(this.formProduto.value).subscribe();
  }
}
  
  
  
  getCollection(){
    this._collection.getAllCollections().subscribe(
      res =>{
        this.AllCollections = res
      }
    )
  }

}
