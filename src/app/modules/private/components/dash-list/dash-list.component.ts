import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CollectServService } from '../../services/collect-serv.service';
import { Collection } from '../../interfaces/collection';



@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.scss']
})
export class DashListComponent  implements OnInit{

  public AllCollections: Collection[] = [];

  Rows: string[] = ['ColeçãoID', 'Nome da Coleção', 'Orçamento', 'Responsável'];

  constructor(private route: Router, private _service: CollectServService) { }

  ngOnInit(): void {
    this.getAllCollections();
  };

   private getAllCollections(){
    this._service.getAllCollections().subscribe(
      res =>{
        this.AllCollections = res
        
      }
    )
  };

}

