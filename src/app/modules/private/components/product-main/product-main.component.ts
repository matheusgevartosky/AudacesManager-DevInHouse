import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProdServService } from '../../services/prod-serv.service';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit {

  public AllProds: Product[] = []

  Rows: string[] = ['ModeloID', 'Nome do Modelo', 'Coleção', 'Responsável'];

  constructor(private route: Router, private _service:ProdServService) { }

  ngOnInit(): void {
    this.getAllProds()
  }

  private getAllProds(){
    this._service.getAllProducts().subscribe(
      res =>{
        this.AllProds = res
      }
    )
  }

  goToForm(){
    this.route.navigate(['private/main/addProd'])
  }

}
