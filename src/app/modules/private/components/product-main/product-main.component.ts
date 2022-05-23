import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss']
})
export class ProductMainComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToForm(){
    this.route.navigate(['private/main/addProd'])
  }

}
