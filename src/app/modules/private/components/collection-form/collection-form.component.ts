import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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
    orcamento:[null,[Validators.required, Validators.nullValidator]],
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
      return console.log('sucess')
    }
    return console.error('error')
  }








  openSnackBar(msg: string) {
    this._snackBar.open(msg,'', {
      duration: 5000
    })
  }
}
