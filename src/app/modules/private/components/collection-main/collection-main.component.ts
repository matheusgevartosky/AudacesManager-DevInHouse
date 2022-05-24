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

  constructor(private route: Router, private _service: CollectServService) { }

  ngOnInit(): void {
    this.getAllCollections()
  };

   private getAllCollections(){
    this._service.getAllCollections().subscribe(
      res =>{
        this.AllCollections = res
      }
    )
  };

  goToForm(){
    this.route.navigate(['private/main/addColecao'])
  };

}
