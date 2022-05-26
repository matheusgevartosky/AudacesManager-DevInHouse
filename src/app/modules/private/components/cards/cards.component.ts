import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { Collection } from '../../interfaces/collection';
import { CollectServService } from '../../services/collect-serv.service';
import { ProdServService } from '../../services/prod-serv.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public AllCollections: Collection[] = [];

  public collectionLenght!:number;
  public AllProds!:number;

  public allBudgets = [];
  public allValues!:number;
 

  constructor(private _prod: ProdServService, private _collection: CollectServService) { }

  ngOnInit(): void {
    this.getAllCollections();
    this.getAllProds();
    
  }

  calcMedia(): void{
    this.allValues = this.AllCollections.reduce(
      (soma, atual) => soma +atual.orcamento, 0
    );
    console.log(this.allValues)
    

  };


  private getAllCollections(): void{
    this._collection.getAllCollections().subscribe(
      res =>{
        this.AllCollections = res;
        this.collectionLenght = res.length;
        this.calcMedia();
      }
    )
  };

  private getAllProds(){
    this._prod.getAllProducts().subscribe(
      res =>{
        this.AllProds = res.length
        
      }
    )
  }

}
