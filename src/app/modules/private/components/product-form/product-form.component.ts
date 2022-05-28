import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProdServService } from '../../services/prod-serv.service';
import { Product } from '../../interfaces/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CollectServService } from '../../services/collect-serv.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public AllCollections$! : Observable<any>
  public AllProds$! : Observable<any>
  public id: any;

  public formProduto: FormGroup = this._form.group({
    name: ['', [Validators.required]],
    responsavel: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    colecao: ['', [Validators.required]],
    bordado: [false, [Validators.required]],
    estampa: [false, [Validators.required]],
    id: null
  })

  constructor(
    private _form: FormBuilder,
    private _service: ProdServService,
    private _router: ActivatedRoute,
    private _location: Location,
    private _snackBar: MatSnackBar,
    private _collections: CollectServService
  ) { }

  ngOnInit(): void {

    this.AllProds$ = this._service.getAllProducts();
    this.AllCollections$ = this._collections.getAllCollections();

    this._router.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = params.get('id')
        if(this.id != null){
          const prod$ = this._service.getByID(this.id);
          prod$.subscribe(res   => {
            this.updateForm(res)
          })
        }
      })
  }

  public createProd() {
    if (this.formProduto.valid) {
      if (this.formProduto.value.id != null || this.formProduto.value.id != undefined) {
        this._service.updateProducts(this.formProduto.value).subscribe( res => {
          this.openSnackBar(`Olá, o modelo '  ${this.formProduto.value.name} - id ${this.formProduto.value.id}' , foi editado! `)
          setTimeout(() => {
            this._location.back()
          }, 2000);
        }, err => {
          this.openSnackBar(`Olá, o modelo ${this.formProduto.value.name} não foi Editado! Tente Novamente! `)
        }
)
      } else {
        this._service.createProducts(this.formProduto.value).subscribe( res => {
          this.openSnackBar(`Olá, o modelo ${this.formProduto.value.name} - id ${this.formProduto.value.id}, foi editado! `)
          setTimeout(() => {
            this._location.back()
          }, 2000);
        }, err => {
          this.openSnackBar(`Olá, o modelo' ${this.formProduto.value.name} - id ${this.formProduto.value.id}' , não foi Editado! Tente Novamente! `)
        }
        )
      }
    }
  }

  public updateForm(prod: Product) {
    this.formProduto.patchValue({
      id: prod.id,
      name: prod.name,
      responsavel: prod.responsavel,
      modelo: prod.modelo,
      colecao: prod.colecao,
      bordado: prod.bordado,
      estampa: prod.estampa
    })
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg,'', {
      duration: 5000
    })
  }

  removeProd(){
    this._service.deleteProduct(this.formProduto.value.id).subscribe()
    this.openSnackBar(`Olá, o modelo ${this.formProduto.value.name} foi deletado! `)
        setTimeout(() => {
          this._location.back()
        }, 2000);
  }

}




