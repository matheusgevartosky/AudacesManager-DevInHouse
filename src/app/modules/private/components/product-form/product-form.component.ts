import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CollectServService } from './../../services/collect-serv.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Collection } from '../../interfaces/collection';
import { ProdServService } from '../../services/prod-serv.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public AllCollections: Collection[] = []

  public formProduto: FormGroup = this._form.group({
    name: ['', [Validators.required]],
    responsavel: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    colecao: ['', [Validators.required]],
    bordado: [false, [Validators.required]],
    estampa: [false, [Validators.required]]
  })


  constructor(
    private _form: FormBuilder,
    private _collection: CollectServService,
    private _service: ProdServService,
    private _router: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.getCollection()
    this._router.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const prod$ = this._service.getByID(id);
        prod$.subscribe( res => {
          this.updateProd(res)
        })
      }
    )
  }

  public createProd() {
    if (this.formProduto.valid) {
      this._service.updateProducts(this.formProduto.value).subscribe();
    }
  }

  getCollection() {
    this._collection.getAllCollections().subscribe(
      res => {
        this.AllCollections = res
      }
    )
  }

  public updateProd(prod: any){
    this.formProduto.patchValue({
      name: prod.name,
      responsavel: prod.responsavel,
      modelo: prod.modelo,
      colecao: prod.colecao,
      bordado: prod.bordado,
      estampa: prod.estampa
    })
  }
}
