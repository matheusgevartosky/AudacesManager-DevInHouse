import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Collection } from '../../interfaces/collection';
import { CollectServService } from '../../services/collect-serv.service';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss']
})
export class CollectionFormComponent implements OnInit {

  public formColecao: FormGroup = this._form.group({
    name:['',[Validators.required]],
    estacao:['',[Validators.required]] ,
    orcamento:[0,[Validators.required]],
    responsavel:['',[Validators.required]],
    marca:['',[Validators.required]],
    anoLancamento:['',[Validators.required]]
  })

  constructor(private _form: FormBuilder, private _service: CollectServService) { }

  ngOnInit(): void {
  }

  public createCollection(){
    if(this.formColecao.valid){
      this._service.createCollection(this.formColecao.value).subscribe()
    }
    return console.error('error')
  }
}
