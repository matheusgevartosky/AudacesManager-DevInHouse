import { Collection } from './../../interfaces/collection';
import { CollectServService } from './../../services/collect-serv.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: ['./collection-main.component.scss']
})
export class CollectionMainComponent implements OnInit {

  public AllCollections: Collection[] = [];

  Rows: string[] = ['ColeçãoID', 'Nome da Coleção', 'Estação de Lançamento', 'Responsável'];

  constructor(private route: Router, private _service: CollectServService) { }

  ngOnInit(): void {
    this.getAllCollections()
  };

   private getAllCollections(): void{
    this._service.getAllCollections().subscribe(
      res =>{
        this.AllCollections = res
      }
    )
  };

  goToForm(): void{
    this.route.navigate(['private/main/addColecao'])
  };
  
  

}
