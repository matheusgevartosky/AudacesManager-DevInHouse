import { Collection } from './../../interfaces/collection';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CollectServService } from '../../services/collect-serv.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss']
})
export class CollectionFormComponent implements OnInit {

  public id: any;
  public AllCollections$! : Observable<any>

  public formColecao: FormGroup = this._form.group({
    name:['',[Validators.required]],
    estacao:['',[Validators.required]] ,
    orcamento:[null,[Validators.required, Validators.nullValidator]],
    responsavel:['',[Validators.required]],
    marca:['',[Validators.required]],
    anoLancamento:['',[Validators.required]],
    id: null

  })


  constructor(
    private _form: FormBuilder,
    private _service: CollectServService,
    private _router: ActivatedRoute,
    private _location: Location,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.AllCollections$ = this._service.getAllCollections();

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

  public createCollection() {
    if (this.formColecao.valid) {
      if (this.formColecao.value.id != null || this.formColecao.value.id != undefined) {
        this._service.updateCollection(this.formColecao.value).subscribe( res => {
          this.openSnackBar(`Olá, o modelo ' ${this.formColecao.value.name} - id ${this.formColecao.value.id} ' , foi editado! `)
          setTimeout(() => {
            this._location.back()
          }, 2000);
        }, err => {
          this.openSnackBar(`Olá, o modelo ' ' ${this.formColecao.value.name} - id ${this.formColecao.value.id} ',  não foi Editado! Tente Novamente! `)
        }
)
      } else {
        this._service.createCollection(this.formColecao.value).subscribe( res => {
          this.openSnackBar(`Olá, o modelo '' ${this.formColecao.value.name} - id ${this.formColecao.value.id} ', foi editado! `)
          setTimeout(() => {
            this._location.back()
          }, 2000);
        }, err => {
          this.openSnackBar(`Olá, o modelo ' ' ${this.formColecao.value.name} - id ${this.formColecao.value.id} ' , não foi Editado! Tente Novamente! `)
        }
        )
      }
    }
  }

  public updateForm(collection: Collection) {
    this.formColecao.patchValue({
      id: collection.id,
      name: collection.name,
      estacao: collection.estacao,
      orcamento: collection.orcamento,
      responsavel: collection.responsavel,
      marca: collection.marca,
      anoLancamento: collection.anoLancamento
    })
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg,'', {
      duration: 5000
    })
  }

  removeProd(){
    this._service.deleteProduct(this.formColecao.value.id).subscribe()
    this.openSnackBar(`Olá, o modelo ${this.formColecao.value.name} foi deletado! `)
        setTimeout(() => {
          this._location.back()
        }, 2000);
  }

  cancel(){
    this.openSnackBar(`Ação cancelada! `)
        setTimeout(() => {
          this._location.back()
        }, 1000);
  }

}
